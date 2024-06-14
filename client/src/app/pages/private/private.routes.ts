import { Routes } from '@angular/router';

export const PRIVATE_ROUTES: Routes = [   
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'folders',
                loadComponent: () => import('./dashboard/components/folders-list/folders-list.component'),
                title:'Folders'
            },
            {
                path: 'folder/:id',
                loadComponent: () => import('./dashboard/components/folder-detail/folder-detail.component'),
            }
        ],
        title: 'Dashboard'
    }
];