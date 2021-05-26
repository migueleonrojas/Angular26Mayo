import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable({
    providedIn: 'root'
})

export class ServiceCharacter{

    constructor(
        private http : HttpClient
    ){



    }

    getCharacters(event:Event){

        alert( (<HTMLOptionElement>event.target).value );
        
            //return this.http.get('http://hp-api.herokuapp.com/api/characters/house/' + (<HTMLOptionElement>event.target).value ).toPromise();
        
    }


    
}