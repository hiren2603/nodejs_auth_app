import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/users.routes";
import postsRoutes from "./routes/posts.routes";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("/src/upload"));
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postsRoutes);

export { app };
