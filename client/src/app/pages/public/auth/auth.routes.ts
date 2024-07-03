import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const AUTH_ROUTES: Routes = [
    {
        path: 'register', component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'login', component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'private',
        loadChildren: () => import('../../../app.routes').then(m => m.routes)
    }
];