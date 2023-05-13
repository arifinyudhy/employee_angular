import { Injectable } from '@angular/core';
import dummy_data from '../dummy/dummy_data';
import { IEmployee } from '../interfaces/empoyee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Array<IEmployee> = dummy_data;
  private lastId: number = 100;
  constructor() {}

  getEmployees() {
    return this.employees;
  }
  getEmployee(id: number) {
    return this.employees.find((x) => x.id === id);
  }
  setEmployees(employees: Array<IEmployee>) {
    this.employees = employees;
  }
  getLastId() {
    return this.lastId;
  }
  setLastId(id: number) {
    this.lastId = id;
  }
}
