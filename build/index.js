"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const routes_1 = require("./routes");
(0, database_1.connectToDatabase)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.json({ message: "Hello World" });
});
app.use("/costumer", routes_1.ticketRouter);
app.use("/costumer", routes_1.ticketTypeRouter);
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001 or renderAPI");
});
