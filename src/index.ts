import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { ticketRouter, ticketTypeRouter } from "./routes";

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/customer", ticketRouter);
app.use("/customer", ticketTypeRouter);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001 or renderAPI");
});
