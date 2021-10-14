import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdismPage } from './cdism.page';

const routes: Routes = [
  {
    path: '',
    component: CdismPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdismPageRoutingModule {}
