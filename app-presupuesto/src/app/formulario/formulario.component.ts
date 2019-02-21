import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingresos/ingreso.service';
import { GastoServicio } from '../gastos/gasto.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { Gasto } from '../gastos/gasto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;
  constructor(private ingresoServicio: IngresoServicio,
    private gastoServicio: GastoServicio) { }

  ngOnInit() {
  }

  tipoOperacion(event) {
    this.tipo = event.target.value;
    console.log(  this.tipo)
  }

  agregarValor() {
    if (this.tipo === 'ingresoOperacion') {
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.gastoServicio.gastos.push(new Gasto(this.descripcionInput, this.valorInput));
    }
  }
}
