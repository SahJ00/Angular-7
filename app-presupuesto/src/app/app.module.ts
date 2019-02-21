import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosComponent } from './gastos/gastos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingresos/ingreso.service';
import { GastoServicio } from './gastos/gasto.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngresosComponent,
    GastosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio, GastoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
