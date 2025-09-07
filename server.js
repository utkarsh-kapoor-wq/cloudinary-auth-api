import dotenv from "dotenv";
import express from "express";
import connectToDB from "./src/database/db.js";
import authRoutes from "./src/routes/auth-routes.js";
import homeRoutes from "./src/routes/home-routes.js";
import adminRoutes from "./src/routes/admin-routes.js";
import uploadImageRoutes from "./src/routes/image-routes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectToDB(process.env.DB_LINK);
//Middlewares
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listeining to PORT ${PORT}`);
});
