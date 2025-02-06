import { Component } from '@angular/core';

@Component({
  selector: 'app-click-tycoon',
  standalone: false,
  templateUrl: './click-tycoon.component.html',
  styleUrl: './click-tycoon.component.css'
})
export class ClickTycoonComponent {

  cashPerClick:number = 5;
  
  cash:number = 0;
  
  banconote: number[] = [0,0,0,0];
  
  cashcopy: number = this.cash;
  
  
  addCash(){
    this.cash += this.cashPerClick;
    this.contaBanconote();
  }

  removeCash(){
    if (this.cash >= this.cashPerClick) {
      this.cash -= this.cashPerClick;
      this.contaBanconote();
    } else {
      alert('Il saldo non può essere negativo!');
    }
  }
  
  contaBanconote(){
    this.banconote = [0,0,0,0];
    this.cashcopy = this.cash;
    while(this.cashcopy !=0){
      if(this.cashcopy>=50){
        this.banconote[3] +=1;
        this.cashcopy -=50;
      } else if(this.cashcopy>=20){
        this.banconote[2] +=1;
        this.cashcopy -=20;
      } else if(this.cashcopy>=10){
        this.banconote[1] +=1;
        this.cashcopy -=10;
      } else if(this.cashcopy >=5){
        this.banconote[0] +=1;
        this.cashcopy -=5;
      }
    }

  }

}
