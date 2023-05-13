import { Injectable } from '@angular/core';
import dummy_data from '../dummy/dummy_data';
import { IEmployee, IFilterEmployee } from '../interfaces/empoyee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Array<IEmployee> = dummy_data;
  private lastId: number = 100;
  private deletedId: Array<number> = [];
  filterEmployee: IFilterEmployee = {
    name: '',
    email: '',
  };
  constructor() {}

  setFilter(filter: IFilterEmployee) {
    this.filterEmployee = filter;
  }
  getEmployees() {
    return this.employees.filter(
      (x) =>
        `${x.firstName} ${x.lastName}`
          .toLowerCase()
          .includes((this.filterEmployee.name ?? '').toLowerCase()) &&
        x.email
          .toLowerCase()
          .includes((this.filterEmployee.email ?? '').toLowerCase()) &&
        !this.deletedId.includes(x.id)
    );
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
  deleteEmployee(id: number) {
    this.deletedId.push(id);
  }
}
