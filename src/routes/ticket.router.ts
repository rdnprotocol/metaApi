import { Router } from "express";
import {
  createTicketController
} from "../controllers";

const ticketRouter = Router();

ticketRouter
  .post("/", createTicketController)


export { ticketRouter };