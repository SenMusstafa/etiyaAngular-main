import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personel } from '../model/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }

  getPersoneller() {
    return this.http.get<Personel[]>('/assets/personeller.json');
  }

}
