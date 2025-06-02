import fs from 'fs'
import { employeeFile } from '../utils/constants';
import { Employee } from '../..';

export default function removeEmployee(id: number){
    const content = fs.readFileSync(employeeFile, 'utf-8')
    const employeeList: Employee[] = JSON.parse(content)

    const employeeIndex = employeeList.findIndex((employee) => employee.id === id);

    if(employeeIndex === -1) return "failed"

    employeeList.splice(employeeIndex, 1)

    fs.writeFileSync(employeeFile, JSON.stringify(employeeList))

    return "success"
}