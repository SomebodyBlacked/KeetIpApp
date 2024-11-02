import express from "express";
import indexRouter from "./controllers/indexController.js";
import notesRouter from "./controllers/notesController.js";
import logger from "./middlewares/logger.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(`/`, indexRouter);
app.use(`/`, notesRouter);

app.listen(port, () => {
  console.log(`backend listening on port ${port}`);
});
