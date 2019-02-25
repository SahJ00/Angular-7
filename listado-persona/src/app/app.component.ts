import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void { }
  // titulo = 'Listado de Personas';
  // // personas: Persona[] = [new Persona("Juan", "Perez"),
  // // new Persona("Pepe", "Lopez")];
  // personas:Persona[] = [];
  // constructor(private loggingService: LoggingService,
  //   private personaService: PersonasService) { }

  //   ngOnInit(): void {
  //     this.personas = this.personaService.personas;
  //   }

  // // onPersonaAgregada(persona: Persona) {
  //   // this.personas.push(persona)
  //   // this.loggingService.enviaMensajeAConsola("Enviamos al array a la nueva persona " + persona.nombre);
  //   // this.personaService.agregarPersona(persona)
  // // }


}
