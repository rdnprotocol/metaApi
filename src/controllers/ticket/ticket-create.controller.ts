import { RequestHandler } from "express";
import { ticketModel } from "../../models";
import generateUniqueId from "generate-unique-id";

export const createTicketController: RequestHandler = async (req, res) => {
  try {
    const { ticketName, ticketDesc, phoneNumber, ticketType, isHighPriority } =
      req.body;
    const ticketNumber = generateUniqueId({
      length: 4,
      useLetters: false,
    });

    const { _id } = await ticketModel.create({
      ticketNumber,
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
