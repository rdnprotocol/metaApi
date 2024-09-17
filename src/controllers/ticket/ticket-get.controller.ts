import { RequestHandler } from "express";
import { ticketModel } from "../../models";

export const getTicketController: RequestHandler = async (req, res) => {
  try {
    const data = await ticketModel.find({}).populate("typeTicket");

    return res.status(200).json({
      data,
      message: "ticket sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
