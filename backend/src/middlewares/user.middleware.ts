import { Request, Response, NextFunction } from "express";
import { User } from "../entity/User";
import { ApiError } from "../utils/ApiError";
import { db } from "../db";
import jwt, { JwtPayload } from "jsonwebtoken";

const userRepo = db.getRepository(User);
export async function varifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.cookies.accessToken);
  try {
    const token: string =
      req.cookies.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unautorised request!");
    } else {
      const decodedToken = jwt.verify(token, "my-secret") as JwtPayload;
      console.log(decodedToken);
      const foundUser = await userRepo.findOneBy({ id: decodedToken.id });
      if (foundUser) {
        next();
      } else {
        throw new ApiError(401, "Unautorised request!");
      }
    }
  } catch (error) {
    console.log(error);
    throw new ApiError(401, "Invalid access token");
  }
}
