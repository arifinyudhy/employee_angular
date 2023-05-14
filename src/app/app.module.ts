import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CurrencyPipe, DecimalPipe, registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrencyDirective } from './directive/currency.directive';
import { DetailEmployeeComponent } from './pages/employee/detail-employee/detail-employee.component';
import { FormEmployeeComponent } from './pages/employee/form-employee/form-employee.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { LoginComponent } from './pages/login/login.component';
registerLocaleData(localeId, 'id-ID');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListEmployeeComponent,
    FormEmployeeComponent,
    DetailEmployeeComponent,
    CurrencyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id-ID' },
    DecimalPipe,
    CurrencyPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
