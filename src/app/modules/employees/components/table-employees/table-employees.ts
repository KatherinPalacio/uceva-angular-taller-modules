import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeesService } from '../../services/employees';

/**
 * Component responsible for displaying
 * the employees table.
 */
@Component({
  selector: 'app-table-employees',
  standalone: false,
  templateUrl: './table-employees.html',
  styleUrls: ['./table-employees.scss'],
})
export class TableEmployees implements OnInit {

  /**
   * List of employees that will be displayed
   * inside the table.
   */
  employees: Employee[] = [];

  /**
   * Creates the component and injects the EmployeesService.
   * @param employeesService service used to retrieve employees data
   */
  constructor(private employeesService: EmployeesService) {}

  /**
   * Angular lifecycle hook executed when the component is initialized.
   * It loads the employees data from the service.
   */
  ngOnInit(): void {
    this.employees = this.employeesService.getEmployees();
  }

}