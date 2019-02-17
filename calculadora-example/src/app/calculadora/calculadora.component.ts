import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  numberA:number = 0
  numberB:number = 0
  result:number;
  constructor() { }

  ngOnInit() {
  }
  onNumberA(event: Event) {
    this.numberA = parseInt((<HTMLInputElement>event.target).value);
  }
  onNumberB(event: Event) {
    this.numberB = parseInt((<HTMLInputElement>event.target).value);
  }
  onSumNumber():void {
    this.result = this.numberA + this.numberB;
  }
}
