import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { JumbotronComponent } from './inicio/jumbotron/jumbotron.component';
import { CarouselComponent } from './inicio/carousel/carousel.component';
import { TarjetasComponent } from './inicio/tarjetas/tarjetas.component';

import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    JumbotronComponent,
    CarouselComponent,
    TarjetasComponent,
    NoticiasComponent,
    InformacionComponent,
    ContactoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
