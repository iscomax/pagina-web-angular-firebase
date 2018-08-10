import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { FormService} from './services/form.service';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    //HttpModule,
    FormsModule,
    HttpClientModule,
   


  ],
  providers: [FormService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }


