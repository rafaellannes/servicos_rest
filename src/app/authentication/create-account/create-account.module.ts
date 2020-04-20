import { NgModule } from '@angular/core';

import { CreateAccountPageRoutingModule } from './create-account-routing.module';
import { CreateAccountPage } from './create-account.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CreateAccountPageRoutingModule
  ],
  declarations: [CreateAccountPage]
})
export class CreateAccountPageModule {}
