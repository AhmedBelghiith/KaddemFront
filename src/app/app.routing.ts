import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'equipe',
      loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule)
  },
  {
    path: 'detail-equipe',
    loadChildren: () => import('./detailEquipe/detail-equipe.module').then(m => m.DetailEquipeModule)
}
  ]}
];
