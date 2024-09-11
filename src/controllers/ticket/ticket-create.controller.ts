import { RequestHandler } from "express";
import { ticketModel } from "../../models";

export const createTicketController: RequestHandler = async (req, res) => {
  try {
    const { ticketName } = req.body;

    await ticketModel.create({
      ticketName,
    });

    return res.status(201).json({
      message: "ticket created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};