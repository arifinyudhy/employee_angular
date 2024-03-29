export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: number | string;
  status: string;
  group: string;
  description: string;
}
export interface IFilterEmployee {
  name: string;
  email: string;
}
