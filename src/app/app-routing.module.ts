import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: ()=>import('./views/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./views/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
