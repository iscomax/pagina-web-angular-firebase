import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public url: string;
 
  constructor(
      public http: HttpClient
  ){
      this.url =''; // http://tupagina.php
  }


  addContacto(nombre: String, correo: String,): Observable<any>{
      // let json = JSON.stringify(producto);
      console.log('procesando')
      this.url =  'http://wyvernmx.online/proyectobootcam/formulario.php?nombre=LL&email=ffff&telefono=55&comentarios=ee'
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
       
      return this.http.get(this.url);
  }
}
