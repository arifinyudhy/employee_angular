import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/empoyee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss'],
})
export class DetailEmployeeComponent implements OnInit {
  id!: number;
  employee?: IEmployee;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.id = +(this.activatedRoute.snapshot.paramMap.get('id') ?? 0);
    if (this.id === 0) this.router.navigate(['']);
    else {
      this.employee = this.employeeService.getEmployee(this.id);
    }
  }
}
