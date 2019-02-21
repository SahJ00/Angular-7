import { Component, OnInit, Input } from '@angular/core';
import { GastoServicio } from './gasto.service';
import { Gasto } from './gasto.model';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  gastos: Gasto[] = [];
  @Input() ingresoTotal: number;

  constructor(private gastoServicio: GastoServicio) { }

  ngOnInit() {
    this.gastos = this.gastoServicio.gastos;
  }

  eliminarGasto(gasto: Gasto) {
    this.gastoServicio.eliminar(gasto)
  }

  calcularPorcentaje(gasto: Gasto) {
    return gasto.valor / this.ingresoTotal;
  }
}
