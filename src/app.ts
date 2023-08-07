import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

//cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Testin
app.get("/", (req: Request, res: Response) => {
  res.send("Work successfully");
});

export default app;
