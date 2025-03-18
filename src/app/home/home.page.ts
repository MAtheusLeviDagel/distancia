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

  if(this.tipo == 'USA'){
    this.res = this.dis/5
   }

 if(this.tipo == 'EUA'){
  this.res = this.dis / 5.5

 }

}
}


