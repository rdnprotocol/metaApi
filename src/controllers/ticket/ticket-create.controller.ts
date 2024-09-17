import { RequestHandler } from "express";
import { ticketModel } from "../../models";

export const createTicketController: RequestHandler = async (req, res) => {
  try {
    const { ticketName, ticketDesc, phoneNumber, ticketType, isHighPriority } =
      req.body;

    const { _id } = await ticketModel.create({
      ticketName,
      description: ticketDesc,
      phoneNumber,
      typeTicket: ticketType,
      isHighPriority,
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
