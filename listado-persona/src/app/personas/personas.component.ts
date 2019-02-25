import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  titulo = 'Listado de Personas';

  personas: Persona[] = [];
  constructor(private loggingService: LoggingService,
    private personaService: PersonasService,
    private router: Router, ) { }

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }


}