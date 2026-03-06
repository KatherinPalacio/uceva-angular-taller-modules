import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { EMPLOYEES_DATA } from '../../../core/config/employees.config';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() {}

  getEmployees(): Employee[] {
    return EMPLOYEES_DATA;
  }

}