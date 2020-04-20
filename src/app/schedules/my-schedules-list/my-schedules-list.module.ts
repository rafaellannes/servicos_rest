import { NgModule } from '@angular/core';

import { MySchedulesListPageRoutingModule } from './my-schedules-list-routing.module';

import { MySchedulesListPage } from './my-schedules-list.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MySchedulesListPageRoutingModule
  ],
  declarations: [MySchedulesListPage]
})
export class MySchedulesListPageModule {}
