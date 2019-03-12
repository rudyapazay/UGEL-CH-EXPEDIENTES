// modulos del angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modulo de bootstraps
import { ButtonsModule } from 'ngx-bootstrap';

//modulos de desarrollo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
