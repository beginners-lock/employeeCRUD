import fs from 'fs'
import { employeeFile } from '../utils/constants';

export default function listEmployees(){
    const content = fs.readFileSync(employeeFile, 'utf-8')

    return JSON.parse(content)
}