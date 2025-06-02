export type Department = 'Accounting' | 'Human Resources' | 'Engineering' | 'Technology'

export interface Employee {
    id: number
    name: string
    dept: Department
    pass: string
}