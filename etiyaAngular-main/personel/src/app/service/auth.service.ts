import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personel } from '../model/personel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
  ) { }

  girisYap(personel: Personel): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.post<{token: string}>("/giris",
        { email: personel.email, password: personel.password }).subscribe({
          next: (resp) => {
            if (resp.token) {
              localStorage.setItem("token", resp.token)
              localStorage.setItem("email", personel.email)
              localStorage.setItem("password", personel.password)
              resolve(true)
            } else {
              resolve(false)
            }
          },
          error: (err) => {
            console.log(err)
            reject(false)
          }
        });
    });
  }

  girisYapilmis(): boolean {
    if (localStorage.getItem("token")) {
      return true
    }
    return false
  }

  getToken(): string | null {
    return localStorage.getItem("token")
  }

  cikisYap() {
    localStorage.clear()
  }
}
