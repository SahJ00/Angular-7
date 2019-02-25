import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class PersonasService {
    personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Pepe", "Lopez")];

    saludar = new EventEmitter<number>();
    constructor(private loggingService: LoggingService) {

    }
    agregarPersona(persona: Persona) {
        this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona.nombre + " apellido: " + persona.apellido);
        this.personas.push(persona)
    }
    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;
    }
    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }
    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
    }
}