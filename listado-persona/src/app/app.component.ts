import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBduRmVaSGkmVQ7E8o7kAXxjvNc8-csx3o",
      authDomain: "listado-persona.firebaseapp.com",
    })
  }

  isAutenticado() {
    return this.loginService.isAunteticado();
  }
  salir() {
    this.loginService.logout();
  }
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
