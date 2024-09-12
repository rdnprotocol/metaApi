import { RequestHandler } from "express";
import { typeTicketModel } from "../../models";

export const getTicketTypeController: RequestHandler = async (req, res) => {
  try {
    const data = await typeTicketModel.find();

    return res.status(200).json({
        data,
      message: "ticket type sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};