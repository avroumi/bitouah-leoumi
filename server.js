import express from "express";
import "dotenv/config";
import { complains } from "./config/supabase.js";

const PORT = process.env.PORT || 3500;

export const app = express();

app.listen(PORT, () => console.log(`Initialized in port : ${PORT}`));
