import { Request, Response } from "express";
import { User } from "../entity/User";
import { db } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/GenerateToken";

const userRepo = db.getRepository(User);

// const tokenSecret:string = process.env.ACCESS_TOKEN_SECRET
export async function ragister(req: Request, res: Response) {
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    phone,
    confirmPassword,
  } = req.body;
  if (
    [
      firstname,
      lastname,
      username,
      email,
      phone,
      password,
      confirmPassword,
    ].some((field: string) => field?.trim() === "")
  )
    return res.status(400).json({ error: "All fields are Required!" });

  if (phone.length !== 13)
    return res.status(400).json({ error: "phone number must be 13 digit" });
  const existedUser = await userRepo.findOne({
    where: [{ username }, { email }, { phone }],
  });
  if (existedUser)
    return res
      .status(400)
      .json("User with given email, phone or username allready exist!!");
  if (password !== confirmPassword)
    return res.status(500).json("Password does not match!!");

  let avatar;
  if (req.file) {
    avatar = req.file.path;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const user = new User();
  user.firstname = firstname;
  user.lastname = lastname;
  user.username = username;
  user.email = email;
  user.phone = phone;
  user.password = hashPassword;
  user.avatar = avatar || "";
  try {
    await userRepo.insert(user);
    return res.status(200).json({ success: "Account created successfully!!" });
  } catch (error) {
    console.log({ message: "Something went wrong While creating user", error });
  }
}

export async function login(req: Request, res: Response) {
  let foundUser = await userRepo.findOne({
    where: [{ username: req.body.username }],
  });
  if (!foundUser)
    return res.status(404).json({ error: "User does not exist!!" });
  const isVarified = bcrypt.compareSync(req.body.password, foundUser.password);
  if (!isVarified)
    return res
      .status(500)
      .json({ error: "Username or Password is incorrect!" });
  const { password, ...user } = foundUser;
  const token = await generateAccessToken(user.id, user.email, user.username);

  userRepo.update({ username: req.body.username }, { token });
  return res
    .cookie("accessToken", token, {
      httpOnly: true,
    })
    .status(200)
    .json({ success: "Login successfull!", user });
}

export async function getAllUsers(req: Request, res: Response) {
  const allUsers = await userRepo.find({
    select: [
      "id",
      "firstname",
      "lastname",
      "email",
      "phone",
      "username",
      "avatar",
    ],
  });
  return res.status(200).json(allUsers);
}

export async function logoutUser(req: Request, res: Response) {
  console.log(req.cookies);
  const user = await userRepo.update(
    { token: req.cookies.accessToken },
    { token: "" }
  );
  console.log(user);
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .clearCookie("accessToken", options)
    .status(200)
    .json("logout successfull!");
}

export async function deleteUser(req: Request, res: Response) {
  const userId = req.params.userId;
  const result = await userRepo.delete(userId);
  return res.status(200).json({ message: "User deleted successfully!" });
}
