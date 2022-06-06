import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'index',
        component: IndexComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path:'**' , redirectTo:'index'
      }
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
