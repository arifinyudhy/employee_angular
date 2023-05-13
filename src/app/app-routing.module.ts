import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '*', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: '', component: ListEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
