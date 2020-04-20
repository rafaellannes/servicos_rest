import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../services/service-list/service-list.module').then(m => m.ServiceListPageModule)
          },
          {
            path:'new-schedule/:serviceId',
            loadChildren: () =>
              import('../schedules/schedule-form/schedule-form.module').then(m => m.ScheduleFormPageModule)

          }
        ]
      },
      {
        path: 'my-schedules',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../schedules/my-schedules-list/my-schedules-list.module').then(m => m.MySchedulesListPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/services',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/services',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
