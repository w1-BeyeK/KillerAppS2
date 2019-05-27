import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppConfigModule } from './app-config.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { UsersComponent } from './users/users.component';
import { CitiesComponent } from './cities/cities.component';
import { AdsComponent } from './ads/ads.component';

import { DataTablesModule } from 'angular-datatables';
import { CityDataTableComponent } from './city-data-table/city-data-table.component';
import { AdDataTableComponent } from './ad-data-table/ad-data-table.component';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AppConfigModule,
    DataTablesModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    CitiesComponent,
    AdsComponent,
    CityDataTableComponent,
    AdDataTableComponent,
    UserDataTableComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
