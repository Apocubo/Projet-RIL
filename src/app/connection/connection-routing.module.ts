import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionPage } from './Connection.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionPageRoutingModule {}