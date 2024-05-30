import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/public/public.routes').then(m => m.PUBLIC_ROUTES)
    }
];
