import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bolum } from '../model/bolum';

@Injectable({
  providedIn: 'root'
})
export class BolumService {

  constructor(private http: HttpClient) { }

  getBolumler() {
    return this.http.get<Bolum[]>('/assets/bolumler.json');
  }
}
