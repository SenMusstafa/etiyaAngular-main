import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from "rxjs/operators";
import { Personel } from '../bean/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }

  getPersoneller(): Observable<Personel[]> {
    return this.http.get<Personel[]>('/assets/personeller.json').pipe(delay(3000));
  }
}
