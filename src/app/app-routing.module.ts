import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path:'v-register',
    loadChildren: () => import('./v-register/v-register.module').then(mod => mod.VRegisterModule),
  } ,
  {
    path:'**',
    redirectTo:'v-register'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

