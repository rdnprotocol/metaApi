import { Router } from "express";
import {
  createTicketTypeController,
  getTicketTypeController,
} from "../controllers";

const ticketTypeRouter = Router();

ticketTypeRouter
  .post("/ticket-type", createTicketTypeController)
  .get("/ticket-type", getTicketTypeController);

export { ticketTypeRouter };
