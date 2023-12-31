import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personel } from '../model/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }

  getPersoneller(): Observable<Personel[]> {
    return this.http.get<Personel[]>('/personel');
  }
}
