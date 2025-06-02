import express from "express"
import createEmployeeController from "../controllers/createEmployee"

export const employeeRouter = express.Router()

employeeRouter.post('/create', createEmployeeController)

