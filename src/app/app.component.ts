import { Component } from '@angular/core';
import { Estudiante } from './estudiante.model';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  signupForm: FormGroup;
  
  constructor(
    private builder: FormBuilder
  ){

    this.signupForm = this.builder.group({

      nombreInput:[ '', Validators.required ],
      fechaInput:[ '', Validators.required ],
      ascendenciaInput:[ '', Validators.required ]

    })

    this.getEmpleados();
  }

  

  
  titulo = 'Ingresando a los estudiantes en el listado';
  estudiantes: Estudiante[] =[];


  getEmpleados(){

    if(localStorage.getItem("dataSource") === null){

      this.estudiantes = [];

    }
    else{

     this.estudiantes =  JSON.parse(localStorage.getItem('dataSource') || '{}')

    }

    return this.estudiantes;

  }
  
  /*empleados: Empleado[] =[

    new Empleado("Miguel", "Leon", "Desarrollador Front End", 700),
    new Empleado("Gabriel", "Monasterios", "Mecanico", 1000),
    new Empleado("Deymar", "Rojas", "Modelo", 1700),
    new Empleado("Carlos", "Nemo", "Electricista", 600),
    new Empleado("Maria", "Socas", "Desarrollador Front End", 3000),

    

  ];*/

  ingresarEstudiante(nombre:string, fecha:string, ascendencia:string){

    this.estudiantes.push(new Estudiante(nombre, fecha, ascendencia ) );

    localStorage.setItem('dataSource', JSON.stringify(this.estudiantes));

    this.signupForm.reset();
    
  }

  
    
  enviar(values:any){

    console.log(values);

  }
  





}
