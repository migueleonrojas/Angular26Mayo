import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatosNuevoEstudianteComponent } from './datos-nuevo-estudiante/datos-nuevo-estudiante.component';

const app_routes: Routes = [

    { path: 'app', component: AppComponent  },
    { path: 'datos-nuevo-estudiante', component: DatosNuevoEstudianteComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'solicitud-estudiante' }
];

export const app_routing = RouterModule.forRoot(app_routes);
