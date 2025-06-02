import express from "express"
import createEmployeeController from "../controllers/createEmployee"
import deleteEmployeeController from "../controllers/deleteEmployee"
import getAllEmployeesController from "../controllers/getAllEmployees"
import getEmployeeController from "../controllers/getEmployee"

export const employeeRouter = express.Router()

employeeRouter.get('/', getAllEmployeesController)

employeeRouter.get('/:id', getEmployeeController)

employeeRouter.post('/create', createEmployeeController)

employeeRouter.delete('/delete/:id', deleteEmployeeController)

