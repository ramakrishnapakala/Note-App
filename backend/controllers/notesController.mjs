import Notes from "../model/Note.mjs";

const getAllTheNotes = async (req, res) => {
  try {
    const notes = await Notes.find({}).sort({ createdAt: -1 });
    if (!notes) {
      return res.status(404).json({
        success: false,
        message: "notes are not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "getting all notes",
      data: notes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getNotesById = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "notes does't not found with id",
      });
    }

    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const createNotes = async (req, res) => {
  try {
    const newNotes = Notes.create(req.body);
    if (newNotes) {
      res.status(201).json({
        success: true,
        message: "new note is created",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "failed to create notes",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const updateNotesById = async (req, res) => {
  try {
    const updatedNote = req.body;
    const note = await Notes.findByIdAndUpdate(req.params.id, updatedNote, {
      new: true, // it will update after result
    });
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "notes does't not found with id",
      });
    }

    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const deleteNoteByID = async (req, res) => {
  try {
    const noteDelete = await Notes.findByIdAndDelete(req.params.id);
    if (!noteDelete) {
      return res.status(404).json({
        success: false,
        message: "failed to delete notes",
      });
    }
    res.status(200).json({
      success: true,
      message: "notes deleted successfully",
      data: noteDelete,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export {
  createNotes,
  getAllTheNotes,
  getNotesById,
  updateNotesById,
  deleteNoteByID,
};
