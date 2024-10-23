import express from "express";
import indexRouter from "./controllers/indexController.js";
import notesRouter from "./controllers/notesController.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(`/`, indexRouter);
app.use(`/`, notesRouter);

app.listen(port, () => {
  console.log(`backend listening on port ${port}`);
});
