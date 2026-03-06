import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeesService } from '../../services/employees';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.html',
  styleUrls: ['./table-employees.scss']
})
export class TableEmployees implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this.employeesService.getEmployees();
  }

}