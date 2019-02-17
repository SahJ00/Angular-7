import { Component } from '@angular/core';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    //     template: `<h1>Listado de personas</h1>
    //                 <app-persona></app-persona>
    //                 <app-persona></app-persona>
    //                 <app-persona></app-persona>`
    styleUrls: ['./personas.component.css']
    // styles: [`
    // h1{
    //     color: blue
    // }
    // `]
})

export class PersonasComponent {
    agregarPersona = false;
    agregarPersonaStatus = "No se ha agregado ninguna Persona";
    tituloPersona = "Ingeniero"
    personaCreada = false
    constructor() {
        setTimeout(() => {
            this.agregarPersona = true;
        }, 3000)
    }

    onCrearPersona() {
        this.personaCreada = true
        this.agregarPersonaStatus = "Persona agregada";
    }

    onModificarPersona(event: Event){
    this.tituloPersona = (<HTMLInputElement>event.target).value;
    }
}