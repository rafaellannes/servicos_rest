import { NgModule } from '@angular/core';

import { ServiceListPageRoutingModule } from './service-list-routing.module';

import { ServiceListPage } from './service-list.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ServiceListPageRoutingModule
  ],
  declarations: [ServiceListPage]
})
export class ServiceListPageModule { }
