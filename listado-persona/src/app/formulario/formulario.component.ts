import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string;
  apellidoInput: string;
  constructor() { }

  ngOnInit() {
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  }

}
