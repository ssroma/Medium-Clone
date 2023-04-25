import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  // {
  //   path: 'singin',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'singup',
  //   component: RegisterComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
