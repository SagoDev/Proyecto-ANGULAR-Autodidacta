import { Routes } from '@angular/router';
import { LoginComponent } from '../public/auth/login/login.component';

export const PRIVATE_ROUTES: Routes = [
    {
        path: '', component: LoginComponent,
        title: 'Login'
    }    
];