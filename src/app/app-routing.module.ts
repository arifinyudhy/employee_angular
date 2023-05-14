import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEmployeeComponent } from './pages/employee/detail-employee/detail-employee.component';
import { FormEmployeeComponent } from './pages/employee/form-employee/form-employee.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '*', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: '', component: ListEmployeeComponent, canActivate: [authGuard] },
  {
    path: 'employee/add',
    component: FormEmployeeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'employee/:id',
    component: DetailEmployeeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'employee/edit/:id',
    component: FormEmployeeComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
