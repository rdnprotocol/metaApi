import mongoose from "mongoose";
const { Schema, model } = mongoose;


const typeTicketSchema = new Schema({
    name: {
        type : String,
        required : true
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
})

export const typeTicketModel = model("type_ticket", typeTicketSchema);