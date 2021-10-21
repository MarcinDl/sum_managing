import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WcagPage } from './wcag.page';

const routes: Routes = [
  {
    path: '',
    component: WcagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WcagPageRoutingModule {}
