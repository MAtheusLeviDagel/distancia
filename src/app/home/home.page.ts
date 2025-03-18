import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  dis=0
  tipo= ''
  res= 0


  constructor() {}
  alertButton = 'ok'
converter(){

  if(this.tipo == 'Gasolina'){
    this.res = this.dis/12
   }

 if(this.tipo == 'Alcool'){
  this.res = this.dis / 8

 }
 if(this.tipo == 'Disel'){
  this.res = this.dis / 10

 }
}
}


