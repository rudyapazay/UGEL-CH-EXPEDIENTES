import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExpedienteComponent } from './components/expediente.component';

@NgModule({
  declarations: [
    ExpedienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ExpedienteComponent]
})
export class ExpedienteModule { }
