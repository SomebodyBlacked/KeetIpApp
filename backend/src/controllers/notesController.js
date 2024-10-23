import { Router } from "express";
import {
  databases,
  principalDatabase,
  notesCollection,
} from "../services/databaseService.js";

const notesRouter = Router();

notesRouter.get("/notes", async (req, res) => {
  let notes = await databases.listDocuments(
    principalDatabase.$id,
    notesCollection.$id
  );
  res.json(notes.documents);
});

export default notesRouter;
