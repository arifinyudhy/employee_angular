import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  IEmployee,
  IFilterEmployee,
} from 'src/app/interfaces/empoyee.interface';
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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  employees: Array<IEmployee> = [];
  displayedColumns: string[] = [
    'id',
    'firstName',
    'email',
    'basicSalary',
    'action',
  ];
  dataSource = new MatTableDataSource<IEmployee>(
    this.employeeService.getEmployees()
  );
  filter: IFilterEmployee = { name: '', email: '' };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cdr.detectChanges();
  }
  ngOnInit(): void {
    this.filter = this.employeeService.filterEmployee;
    this.getEmployees();
  }
  getEmployees() {
    this.employees = this.employeeService.getEmployees();
    this.dataSource.data = this.employees;
  }
  onAction(id: number, action: 'delete' | 'edit' | 'view') {
    switch (action) {
      case 'delete':
        this.deleteEmployee(id);
        break;
      case 'view':
        this.viewDetail(id);
        break;
      case 'edit':
        this.editEmployee(id);
        break;
      default:
        break;
    }
  }
  viewDetail(id: number) {
    this.router.navigate(['employee', id]);
  }
  editEmployee(id: number) {
    this.router.navigate(['employee/edit', id]);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
    this.getEmployees();
  }

  onChangeFilter() {
    this.employeeService.setFilter(this.filter);
    this.getEmployees();
  }
}
