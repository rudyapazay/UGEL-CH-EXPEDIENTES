import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modulo de bootstraps
import { ButtonsModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
//modulo de expedientes
import { ExpedienteModule } from 'modules/expediente-module/expediente.module';
import { ExpedienteComponent } from 'modules/expediente-module/components/expediente.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BrowserModule,
    ExpedienteModule
  ],
  providers: [],
  bootstrap: [AppComponent,ExpedienteComponent]
})
export class AppModule { }
