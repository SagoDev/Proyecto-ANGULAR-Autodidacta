import { Routes } from '@angular/router';
import { LoginComponent } from '../public/auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const PRIVATE_ROUTES: Routes = [
    {
        path: '', component: LoginComponent,
        title: 'Login'
    },
    {
        path:'dashboard', component:DashboardComponent,
        title:'Dashboard'
    }
];