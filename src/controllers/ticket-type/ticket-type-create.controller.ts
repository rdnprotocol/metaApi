import { RequestHandler } from "express";
import { typeTicketModel } from "../../models";

export const createTicketTypeController: RequestHandler = async (req, res) => {
  try {
    const { name, mongoliaName } = req.body;

    await typeTicketModel.create({
        name,
        mongoliaName
    });

    return res.status(201).json({
      message: "ticket type created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};