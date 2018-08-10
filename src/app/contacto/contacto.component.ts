import { Component, OnInit } from '@angular/core';
import { FormService} from '../services/form.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  constructor(private formService: FormService) { }

  ngOnInit() {
  }
  sendform(): void {
    console.log('enviando')
    console.log(this.formService.addContacto('',''))
  }


}

