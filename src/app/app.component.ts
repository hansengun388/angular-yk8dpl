import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Hansen Gunawan S';

  item = [{
    nama : 'Buah Kelengkeng',
    harga : 10000
  },{
    nama : 'Buah Jeruk',
    harga : 15000
  }]


  itemArr =[1,2,3,4];

  show : boolean = true;

  user = {
    nama:'abc'
  };

  Pesan = ' '
  KlikButton(){
    this.Pesan='Tombol Tertakan'
  }
}
