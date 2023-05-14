import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/empoyee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss'],
})
export class FormEmployeeComponent implements OnInit {
  currencyChars = new RegExp('[,.]', 'g');
  formEmployee!: FormGroup;
  isEdit: boolean = false;
  idEmployee: number = 0;
  maxDate = new Date();
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private decimalPipe: DecimalPipe
  ) {}
  ngOnInit(): void {
    this.initialize();
    if (this.isEdit) {
      const employee = this.employeeService.getEmployee(this.idEmployee);
      if (employee) {
        const formated =
          this.decimalPipe.transform(employee.basicSalary, '1.0', 'id-ID') ??
          '';
        this.formEmployee.setValue(employee);
        this.formEmployee.patchValue({
          basicSalary: formated,
        });
      } else {
        this.backToList();
      }
    }

    // this.formEmployee.setValue({
    //   id: this.idEmployee,
    //   firstName: 'arifin',
    //   lastName: 'yudi',
    //   basicSalary: '16000000',
    //   email: 'yudhyarifin@gmail.com',
    //   birthDate: '1995-05-30',
    //   status: 'dev',
    //   group: 'DEV',
    //   description: 'DEV',
    // });
  }
  initialize() {
    //check form create or update
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    this.isEdit = !!id;
    if (id) {
      this.idEmployee = +id;
    } else {
      this.idEmployee = this.employeeService.getLastId();
    }
    //form initialize
    this.formEmployee = this.fb.group({
      id: new FormControl(this.idEmployee),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      basicSalary: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email]),
      birthDate: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.formEmployee.invalid) {
      alert('form invalid');
      return;
    }
    const employee: IEmployee = this.formEmployee.value;
    const salary = this.formEmployee.value.basicSalary;
    const salaryValue = parseInt(
      String(salary).replace(this.currencyChars, '')
    );
    employee.basicSalary = salaryValue;
    this.isEdit
      ? this.employeeService.updateEmployee(employee)
      : this.employeeService.addEmployee(employee);
    this.backToList();
  }
  backToList() {
    this.router.navigate(['']);
  }
}
