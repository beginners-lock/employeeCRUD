import fs from 'fs'
import { employeeFile } from '../utils/constants';
import { Employee } from '../..';

export default function addEmployee(employee: Employee){
    const content = fs.readFileSync(employeeFile, 'utf-8')
    
    const employeeList = JSON.parse(content);
    
    let id = null

    if(employeeList.length === 0){
        id = 1
    }else{
        id = employeeList[employeeList.length-1].id + 1
    }

    employee.id = id

    employeeList.push(employee)

    fs.writeFileSync(employeeFile, JSON.stringify(employeeList))
}