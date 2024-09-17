import { Router } from "express";
import {
  createTicketController,
  getTicketController
} from "../controllers";

const ticketRouter = Router();

ticketRouter
  .post("/ticket", createTicketController)
  .get("/ticket", getTicketController)


export { ticketRouter };