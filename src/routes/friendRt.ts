import express from "express";
import { FRIENDS } from "../controllers/friendCon";

export const friendRt: express.Router = express.Router();
    friendRt.post("/", FRIENDS.Create);
    friendRt.get("/", FRIENDS.FetchAll);



