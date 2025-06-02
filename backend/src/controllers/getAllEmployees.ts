import { Request, Response } from "express";
import listEmployees from "../actions/listEmployees";

export default function getAllEmployeesController(req: Request, res: Response){
    const employees = listEmployees()

    res.send(employees);
}