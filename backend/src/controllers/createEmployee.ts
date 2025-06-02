import { Request, Response } from "express";
import addEmployee from "../actions/addEmployee";

export default function createEmployeeController(req: Request, res: Response){
    const body = req.body;

    addEmployee(body)

    res.send({ message: "success" })
}