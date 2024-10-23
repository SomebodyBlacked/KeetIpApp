import { Router } from "express";

const notesRouter = Router();

let notes = [
  {
    id: 0,
    title: "Note 1",
    content: "Content 1",
  },
  {
    id: 1,
    title: "Note 2",
    content: "Content 2",
  },
];

notesRouter.get("/notes", (req, res) => {
  res.json(notes);
});

export default notesRouter;
