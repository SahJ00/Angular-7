import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model'

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) { }

    //cargar personas
    cargarPersonas() {
        return this.httpClient.get('https://listado-persona.firebaseio.com/datos.json');
    }

    // Guardar personas
    guardarPersonas(personas: Persona[]) {
        // metodo put reemplaza la informacion
        this.httpClient.put('https://listado-persona.firebaseio.com/datos.json', personas).subscribe(
            response => {
                console.log('Resultado de guardar las Personas --> ' + response);
            },
            error => {
                console.log('Error al guardar Personas --> ' + error);
            }
        );
    }

    modificarPersona(index: number, persona: Persona) {
        let url: string;
        url = 'https://listado-persona.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url, persona).subscribe(
            response => {
                console.log('resultado de modifica Persona --> ' + response);
            },
            error => {
                console.log('error al modificar Persona --> ' + error);
            }
        )
    }

    eliminarPersona(index: number) {
        let url: string;
        url = 'https://listado-persona.firebaseio.com/datos/' + index + '.json';
        this.httpClient.delete(url).subscribe(
            response => {
                console.log('resultado de eliminar Persona --> ' + response);
            },
            error => {
                console.log('error al eliminar Persona --> ' + error);
            }
        )
    }
}