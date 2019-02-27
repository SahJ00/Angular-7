import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model'
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient, private loginService: LoginService) { }

    //cargar personas
    cargarPersonas() {
        const token = this.loginService.getIDToken();
        return this.httpClient.get('https://listado-persona.firebaseio.com/datos.json?auth=' + token);
    }

    // Guardar personas
    guardarPersonas(personas: Persona[]) {
        // metodo put reemplaza la informacion
        const token = this.loginService.getIDToken();
        this.httpClient.put('https://listado-persona.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
            response => {
                console.log('Resultado de guardar las Personas --> ' + response);
            },
            error => {
                console.log('Error al guardar Personas --> ' + error);
            }
        );
    }

    modificarPersona(index: number, persona: Persona) {
        const token = this.loginService.getIDToken();
        let url: string;
        url = 'https://listado-persona.firebaseio.com/datos/' + index + '.json?auth=' + token;
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
        const token = this.loginService.getIDToken();
        let url: string;
        url = 'https://listado-persona.firebaseio.com/datos/' + index + '.json?auth=' + token;
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