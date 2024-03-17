import * as jwt from "jsonwebtoken";

export async function generateAccessToken(
  id: number,
  email: string,
  username: string
) {
  const token = jwt.sign(
    { id: id, email: email, username: username },
    "my-secret",
    { expiresIn: "1h" }
  );
  return token;
}
