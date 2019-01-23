import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { Role } from "./_models/role";


import { AddUnvanComponent } from "./_Components/_Unvan/add-unvan/add-unvan.component";
import { EditUnvanComponent } from "./_Components/_Unvan/edit-unvan/edit-unvan.component";
import { UnvanListComponent } from "./_Components/_Unvan/unvan-list/unvan-list.component";

import { AddUnvan2Component } from './_Components/_Unvan2/add-unvan2/add-unvan2.component';
import { EditUnvan2Component } from './_Components/_Unvan2/edit-unvan2/edit-unvan2.component';
import { ListUnvan2Component } from './_Components/_Unvan2/list-unvan2/list-unvan2.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.KullaniciYonetimi_Kullanici_Liste] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: 'register-unvan', component: AddUnvanComponent },
    { path: 'view-unvans', component: UnvanListComponent },
    { path: 'edit-unvan/:id', component: EditUnvanComponent },

    { path: 'add-unvan', component: AddUnvan2Component },
    { path: 'list-unvan', component: ListUnvan2Component },
    { path: 'edit2-unvan', component:  EditUnvan2Component},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);