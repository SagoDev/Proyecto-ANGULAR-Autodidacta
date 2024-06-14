import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/public/public.routes').then(m => m.PUBLIC_ROUTES)
    },
    {
        path:'private',
        loadChildren: () => import('./pages/private/private.routes').then(m => m.PRIVATE_ROUTES)
    }   
];
