import { Router } from "express";
import {
  databases,
  principalDatabase,
  notesCollection,
} from "../services/databaseService.js";
import { ID } from "node-appwrite";

const notesRouter = Router();

notesRouter.get("/notes", async (req, res) => {
  let notes = await databases.listDocuments(
    principalDatabase.$id,
    notesCollection.$id
  );
  res.json(
    notes.documents.map((note) => {
      return {
        id: note.$id,
        title: note.title,
        content: note.content,
      };
    })
  );
});

notesRouter.get("/notes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const note = await databases.getDocument(
      principalDatabase.$id,
      notesCollection.$id,
      id
    );
    res.json({
      id: note.$id,
      title: note.title,
      content: note.content,
    });
  } catch {
    return res.status(404).json({ error: "Note not found" });
  }
});

notesRouter.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  const newNote = { title, content };

  try {
    const createdNote = await databases.createDocument(
      principalDatabase.$id,
      notesCollection.$id,
      ID.unique(),
      newNote
    );
    res.status(201).json({
      title: createdNote.title,
      content: createdNote.content,
    });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: "Failed to create note" });
  }
});

export default notesRouter;
