import type{ Request, Response } from "express";
import { Pet } from "../models/pet.js";
import { createMenuObject } from "../helpers/createMenuObject.js";

export const search = (req: Request, res: Response) => {
   let query: string = req.query.q as string;

   let list = Pet.getByName(query);
 
   res.render("pages/page", {
         menu: createMenuObject(''),
         list,
         query
   });
};


