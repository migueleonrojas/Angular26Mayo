import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {


  public estudiantes: any;

  constructor( private http : HttpClient ) { }

  
  

  ngOnInit(): void {
  }


  getStudent(){

    this.http.get('http://hp-api.herokuapp.com/api/characters/students').toPromise().then(
      result => {

        this.estudiantes = result;
        //console.log("From promise " , result);
      }
    );


  }

  


}
