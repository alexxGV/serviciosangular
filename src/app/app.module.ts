import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './components/personas/personas.component';
import { CohesComponent } from './components/cohes/cohes.component'

import { FormsModule } from '@angular/forms';
import { EmpleariossalarioComponent } from './components/empleariossalario/empleariossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PersonasComponent,
    CohesComponent,
    EmpleariossalarioComponent,
    EmpleadosoficioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
