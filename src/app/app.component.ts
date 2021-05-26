import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:String = 'Escuela Hogwarts';

  students = [

    { 
      'name': 'Harry Potter',
      'dateOfBirth' : '31-07-1980',
      'ancestry': 'half-blood'
    }

    
  ];

  model:any = {};

  addStudent():void{

    this.students.push(this.model);

  }

  showStudents(){


  }

  constructor(
    private builder :FormBuilder
  ){

    this.sigupForm = this.builder.group({

      nombre: [ '', Validators.required ],
      f_nacimiento: [ '', Validators.required ],
      ascendencia : [ '', Validators.required ]

      }

    )

  }

  enviar(values:any){

    console.log(values);
  }

  sigupForm: FormGroup;


  getStudentLocal(){

    let nombre = localStorage.getItem("nombre");
    let studentIn = localStorage.getItem("studentInLocal");

    console.log(studentIn);

  }

  addStudentLocal(){

    let nombre: string = "Miguel";

    let studentInLocal = {

      nombre: 'Miguel',
      dateB: '22-06-1994',
      asc: 'half-blood'
      
    }

    localStorage.setItem("nombre", nombre);

    localStorage.setItem("persona", JSON.stringify( studentInLocal )  );

    this.getStudentLocal();
  }

}