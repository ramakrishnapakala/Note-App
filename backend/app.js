import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.mjs";
import notesRoutes from "./routes/notesRoutes.mjs";
console.clear();

const app = express();

dotenv.config();
const PORT = process.env.PORT;

// middle ware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// routes
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
  });
});
