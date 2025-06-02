import { Request, Response } from "express";

export default function createEmployeeController(req: Request, res: Response){
    const body = req.body;

    console.log(body);

    res.send('Received!!!')
}