import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const PUBLIC_ROUTES: Routes = [
    {
        path: '', component: WelcomePageComponent,
        title:'Autodidacta'
    },
    {
        path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    }
];