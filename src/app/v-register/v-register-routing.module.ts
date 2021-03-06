import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VRegisterComponent} from './v-register.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {
    path:'',
    component: VRegisterComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VRegisterRoutingModule { }
