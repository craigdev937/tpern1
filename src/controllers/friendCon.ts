import express from "express";
import { Friends } from "../models/Friends";

class FriendsClass {
    Create: express.RequestHandler = 
    async (req, res, next) => {
        try {
            const friend: Friends = new Friends();
            friend.first = req.body.first;
            friend.last = req.body.last;
            friend.age = req.body.age;
            friend.info = req.body.info;
            friend.alignment = req.body.alignment;
            await friend.save();
            res.status(201).json(friend);
        } catch (error: any) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    FetchAll: express.RequestHandler =
    async (req, res, next) => {
        try {
            await Friends.find()
            .then((friends) => res.status(200)
            .json(friends));
        } catch (error: any) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const FRIENDS: FriendsClass = new FriendsClass();



