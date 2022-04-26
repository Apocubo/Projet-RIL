import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ConnectionPage } from './Connection.page';

import { ConnectionPageRoutingModule } from './connection-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionPageRoutingModule
  ],
  declarations: [ConnectionPage]
})
export class ConnectionPageModule {}
