import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

indexRouter.get("/hello", (req, res) => {
  res.send("Hello World!");
});

export default indexRouter;
