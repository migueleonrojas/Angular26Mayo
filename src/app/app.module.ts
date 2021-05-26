import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { SolicitudEstudianteComponent } from './solicitud-estudiante/solicitud-estudiante.component';
import { DatosNuevoEstudianteComponent } from './datos-nuevo-estudiante/datos-nuevo-estudiante.component';
import { app_routing } from  './app.route';
import { TaskAddComponent } from './componentes/task-add/task-add.component';
import { TaskListComponent } from './componentes/task-list/task-list.component';
import { TaskComponent } from './componentes/task/task.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    ProfesoresComponent,
    EstudiantesComponent,
    SolicitudEstudianteComponent,
    DatosNuevoEstudianteComponent,
    TaskAddComponent,
    TaskListComponent,
    TaskComponent,
    
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
