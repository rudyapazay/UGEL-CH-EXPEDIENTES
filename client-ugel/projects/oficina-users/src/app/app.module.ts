import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// modulo de bootstraps
import { ButtonsModule } from 'ngx-bootstrap';
// modulo de routing

import { AppComponent } from './app.component';
//modulo de expedientes
import { ExpedienteModule } from 'modules/expediente-module/expediente.module';
import { ExpedienteComponent } from 'modules/expediente-module/components/expediente.component';

import { oficinaRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BrowserModule,
    oficinaRoutingModule,
    //modulos externos
    ExpedienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
