import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import toast from "react-hot-toast";
import NoteCards from "../components/NoteCard";
import api from "../utilities/axios";
import NotesNotFound from "../components/NoteNotFound";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await api.get("/notes");
        setNotes(data.data);
      } catch (err) {
        console.log("Some thing went wrong: ", err);
        toast.error("Failed to load notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading ? (
          <div className="text-center text-primary py-10">Loading notes...</div>
        ) : notes.length === 0 ? (
          <NotesNotFound />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCards key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
