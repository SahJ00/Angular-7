import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  @Output() resultadoSuma = new EventEmitter<number>();
  numberA:number ;
  numberB:number ;
  // result:number;
  constructor() { }

  ngOnInit() {
  }
  // onNumberA(event: Event) {
  //   this.numberA = parseInt((<HTMLInputElement>event.target).value);
  // }
  // onNumberB(event: Event) {
  //   this.numberB = parseInt((<HTMLInputElement>event.target).value);
  // }
  onSumNumber():void {
    let resultado = this.numberA + this.numberB;
    this.resultadoSuma.emit(resultado);
  }
}
