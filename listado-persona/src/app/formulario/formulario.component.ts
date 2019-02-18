// import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model'
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoggingService]
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();
  // nombreInput: string;
  // apellidoInput: string;
  @ViewChild('nombreInput') nombreInput: ElementRef
  @ViewChild('apellidoInput') apellidoInput: ElementRef
  constructor(private loggingService: LoggingService,
              private personasService: PersonasService) { }

  ngOnInit() {
  }

  // onAgregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement) {
  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    // this.personas.push(persona1);
     this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido);
    // this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

}
