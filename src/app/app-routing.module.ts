import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEmployeeComponent } from './pages/employee/detail-employee/detail-employee.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '*', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: '', component: ListEmployeeComponent },
  { path: 'employee/:id', component: DetailEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
