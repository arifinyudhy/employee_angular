import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/empoyee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
})
export class ListEmployeeComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  employees: Array<IEmployee> = [];
  displayedColumns: string[] = ['id', 'firstName', 'basicSalary', 'action'];
  dataSource = new MatTableDataSource<IEmployee>(
    this.employeeService.getEmployees()
  );

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
  onAction(id: number, action: 'delete' | 'edit' | 'view') {
    switch (action) {
      case 'delete':
        this.deleteEmployee(id);
        break;
      case 'view':
        this.viewDetail(id);
        break;
      default:
        break;
    }
  }
  viewDetail(id: number) {
    this.router.navigate(['employee', id]);
  }
  deleteEmployee(id: number) {
    const employee = this.employees.find((e) => e.id == id);
    if (!employee) return;
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
    this.refectEmployee();
  }

  refectEmployee() {
    this.dataSource.data = this.employees;
    this.employeeService.setEmployees(this.employees);
  }
}
