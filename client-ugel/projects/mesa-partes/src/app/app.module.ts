import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpedienteModule } from 'modules/expediente-module/expediente.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpedienteModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
