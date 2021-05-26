import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private apiUrl = 'http://hp-api.herokuapp.com/api/characters/house/';
  
  constructor(private http: HttpClient) { }

  buscarCasa(house: string): Observable<any> {
    // let house = 'slytherin';
    const params = new HttpParams();
    return this.http.get<any>(this.apiUrl + house, {params});

  }
}
