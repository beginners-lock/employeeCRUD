import { Request, Response } from "express";
import removeEmployee from "../actions/removeEmployee";

export default function deleteEmployeeController(req: Request, res: Response){
    const id = req.params.id

    console.log(id)

    const status = removeEmployee(parseInt(id))
    
    res.send({ message: status })
}