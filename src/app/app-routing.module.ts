import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'service-list',
    loadChildren: () => import('./services/service-list/service-list.module').then( m => m.ServiceListPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./authentication/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'schedule-form',
    loadChildren: () => import('./schedules/schedule-form/schedule-form.module').then( m => m.ScheduleFormPageModule)
  },
  {
    path: 'my-schedules-list',
    loadChildren: () => import('./schedules/my-schedules-list/my-schedules-list.module').then( m => m.MySchedulesListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
