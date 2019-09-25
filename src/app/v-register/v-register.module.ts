import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VRegisterRoutingModule } from './v-register-routing.module';
import { VRegisterComponent } from './v-register.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from '../shared/material.module';





@NgModule({
  declarations: [VRegisterComponent, MainContentComponent, SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    VRegisterRoutingModule,
    MaterialModule


  ]
})
export class VRegisterModule { }
