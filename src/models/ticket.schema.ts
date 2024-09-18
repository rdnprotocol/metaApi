import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  ticketNumber: {
    type: Number,
    required: true,
  },
  ticketName: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  typeTicket: {
    type: [Schema.Types.ObjectId],
    ref: "type_ticket",
    required: false,
  },

  isHighPriority: {
    type: Boolean,
    required: false,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const ticketModel = model("ticket", ticketSchema);
