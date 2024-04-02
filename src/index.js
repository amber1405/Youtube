import dotenv from "dotenv";
import connectDB from "./config/database.js";
const PORT = process.env.PORT || 8000;
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
