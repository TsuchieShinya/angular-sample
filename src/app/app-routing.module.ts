import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './view/auth/auth.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
	useHash: true, // reload 対策
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
