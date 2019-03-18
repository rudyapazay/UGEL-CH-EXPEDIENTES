import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExpedienteComponent } from './components/expediente.component';
import { ExpedienteListComponent } from './components/expediente.list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ExpedienteComponent,
    ExpedienteListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [ExpedienteComponent]
})
export class ExpedienteModule { }
