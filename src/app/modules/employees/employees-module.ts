import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing-module';
import { TableEmployees } from './components/table-employees/table-employees';
import { EmployeesPage } from './pages/employees-page/employees-page';

@NgModule({
  declarations: [
    TableEmployees,
    EmployeesPage
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }