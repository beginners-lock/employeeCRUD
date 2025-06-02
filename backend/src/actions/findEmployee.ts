import fs from 'fs'
import { employeeFile } from '../utils/constants';
import { Employee } from '../..';

export default function findEmployee(id: number){
    const content = fs.readFileSync(employeeFile, 'utf-8')
    const employeeList: Employee[] = JSON.parse(content)

    const employee = employeeList.find((employee) => employee.id===id )

    if(employee===undefined){
        return "failed"
    }else{
        return employee
    }
}