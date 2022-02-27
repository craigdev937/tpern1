import express from "express";
import { HomeIndex } from "../controllers/friendCon";

export const friendRt: express.Router = express.Router();
    friendRt.get("/", HomeIndex);



