import dotenv from "dotenv";
import { app } from "./app";
import { db } from "./db/index";

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

db.initialize()
  .then(() => {
    console.log("⚙️  DB connected successfully!!");
  })
  .catch((error) => {
    console.log(` 😡 Error connecting to DB!!, ${error}`);
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
