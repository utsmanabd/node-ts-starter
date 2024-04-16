import express, { Request, Response } from "express";
import { mainRouter } from './src/routes/routes'

const app = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.use("/api", mainRouter)

app.get("*", (req, res) => {
  res.redirect("/api/not-found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});