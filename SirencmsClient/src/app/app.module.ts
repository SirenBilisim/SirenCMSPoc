import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

import {  DataTablesModule} from "angular-datatables";
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddUnvanComponent } from './_Components/_Unvan/add-unvan/add-unvan.component';
import { EditUnvanComponent } from './_Components/_Unvan/edit-unvan/edit-unvan.component';
import { UnvanListComponent } from './_Components/_Unvan/unvan-list/unvan-list.component';
import { AddUnvan2Component } from './_Components/_Unvan2/add-unvan2/add-unvan2.component';
import { EditUnvan2Component } from './_Components/_Unvan2/edit-unvan2/edit-unvan2.component';
import { ListUnvan2Component } from './_Components/_Unvan2/list-unvan2/list-unvan2.component';
import { StaticDatatableComponent } from './_Components/DatatableTest/static-datatable/static-datatable.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,      
          }),
        NgxPaginationModule,
        DataTablesModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AdminComponent,
        AddUnvanComponent,
        EditUnvanComponent,
        UnvanListComponent,
        AddUnvan2Component,
        EditUnvan2Component,
        ListUnvan2Component,
        StaticDatatableComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }