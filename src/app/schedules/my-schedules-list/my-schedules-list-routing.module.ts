import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySchedulesListPage } from './my-schedules-list.page';

const routes: Routes = [
  {
    path: '',
    component: MySchedulesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySchedulesListPageRoutingModule {}
