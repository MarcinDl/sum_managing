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
    loadChildren: () => import('./pages/buildings/cdism/cdism.module').then( m => m.CdismPageModule)
  },
  {
    path: 'wnoz',
    loadChildren: () => import('./pages/buildings/wnoz/wnoz.module').then( m => m.WnozPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./pages/settings/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'default',
    loadChildren: () => import('./pages/settings/default/default.module').then( m => m.DefaultPageModule)
  },
  {
    path: 'wcag',
    loadChildren: () => import('./pages/settings/wcag/wcag.module').then( m => m.WcagPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
