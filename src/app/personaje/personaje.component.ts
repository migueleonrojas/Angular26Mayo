import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  public personajes: any;


  constructor( private http : HttpClient ) { }

  ngOnInit(): void {
  }

  getCharacters(event:Event){


    if((<HTMLOptionElement>event.target).value != "" ){

      this.http.get('http://hp-api.herokuapp.com/api/characters/house/' + (<HTMLOptionElement>event.target).value ).toPromise().then(
        result => {

          this.personajes = result;
          //console.log("From promise " , result);
        }
      );

    } 
    
      
    
    

  }

}
