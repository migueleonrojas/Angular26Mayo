import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  public profesores: any;

  constructor( private http : HttpClient ) { }

  ngOnInit(): void {
  }

  getTeachers(){

      this.http.get('http://hp-api.herokuapp.com/api/characters/staff').toPromise().then(
        result => {

          this.profesores = result;
          //console.log("From promise " , result);
        }
      );


  }

}
