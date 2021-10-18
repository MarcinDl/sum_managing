import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cdism',
    loadChildren: () => import('./pages/cdism/cdism.module').then( m => m.CdismPageModule)
  },
  {
    path: 'wnoz',
    loadChildren: () => import('./pages/wnoz/wnoz.module').then( m => m.WnozPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./pages/settings/language/language.module').then( m => m.LanguagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
