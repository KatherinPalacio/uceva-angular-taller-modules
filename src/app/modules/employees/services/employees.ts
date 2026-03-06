import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { EMPLOYEES_DATA } from '../../../core/config/employees.config';

/**
 * Service responsible for retrieving employees data
 * from the core configuration.
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  /**
   * Returns the list of employees
   */
  getEmployees(): Employee[] {
    return EMPLOYEES_DATA;
  }

}