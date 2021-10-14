import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WnozPage } from './wnoz.page';

const routes: Routes = [
  {
    path: '',
    component: WnozPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WnozPageRoutingModule {}
