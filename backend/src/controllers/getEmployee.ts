import { Request, Response } from "express";
import findEmployee from "../actions/findEmployee";

export default function getEmployeeController(req: Request, res: Response){
    const id = req.params.id

    const employee = findEmployee(parseInt(id))

    res.send(employee)
}