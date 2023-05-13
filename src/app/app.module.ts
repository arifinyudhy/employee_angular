import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailEmployeeComponent } from './pages/employee/detail-employee/detail-employee.component';
import { FormEmployeeComponent } from './pages/employee/form-employee/form-employee.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListEmployeeComponent,
    FormEmployeeComponent,
    DetailEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
