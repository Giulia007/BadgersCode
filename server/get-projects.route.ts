import {Request, Response} from 'express';
import { PROJECTS } from "../src/app/model/db-data";

export function getAllProjects(req: Request, res: Response) {
    console.log("Retrieving projects from db...");
    setTimeout(() => {
      res.status(200).json({payload:Object.values(PROJECTS)});
    }, 1000);

}