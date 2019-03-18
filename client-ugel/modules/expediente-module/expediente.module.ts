import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExpedienteComponent } from './components/expediente.component';
import { ExpedienteListComponent } from './components/expediente.list.component';

@NgModule({
  declarations: [
    ExpedienteComponent,
    ExpedienteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ExpedienteComponent]
})
export class ExpedienteModule { }
