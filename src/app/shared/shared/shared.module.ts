import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceItemComponent } from 'src/app/services/service-item/service-item.component';
import { LoginLockComponent } from 'src/app/authentication/login-lock/login-lock.component';




@NgModule({
  declarations: [
    ServiceItemComponent,
    LoginLockComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceItemComponent,
    LoginLockComponent,
    RouterModule,
  ],
  entryComponents:[
    ServiceItemComponent,
    LoginLockComponent,
  ]
})
export class SharedModule { }
