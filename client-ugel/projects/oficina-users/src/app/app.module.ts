import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpedienteModule } from 'modules/expediente-module/expediente.module';
import { ExpedienteComponent } from 'modules/expediente-module/components/expediente.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpedienteModule
  ],
  providers: [],
  bootstrap: [AppComponent,ExpedienteComponent]
})
export class AppModule { }
