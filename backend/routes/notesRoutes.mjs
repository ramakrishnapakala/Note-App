import express from "express";
import {
  createNotes,
  deleteNoteByID,
  getAllTheNotes,
  getNotesById,
  updateNotesById,
} from "../controllers/notesController.mjs";

const router = express.Router();

router.get("/", getAllTheNotes);
router.get("/:id", getNotesById);

router.post("/", createNotes);
router.put("/:id", updateNotesById);
router.delete("/:id", deleteNoteByID);

export default router;
