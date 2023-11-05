import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme7',
  template: `
    Bir isim giriniz:
    <input type="text" [(ngModel)]="adi" />
    <button (click)="isimEkle()">Ekle</button>
    <table border="1">
      <tr>
        <th>Sıra</th>
        <th>İsim</th>
        <th>İlk İsim</th>
        <th>Son İsim</th>
        <th>Çift</th>
        <th>Tek</th>
      </tr>
      <tr *ngFor="let isim of isimler;index as sira;first as ilk;last as son;even as cift;odd as tek">
        <td>
          {{ sira }}
        </td>
        <td>
          {{ isim }}
        </td>
        <td>
          {{ ilk }}
        </td>
        <td>
          {{ son }}
        </td>
        <td>
          {{ cift }}
        </td>
        <td>
          {{ tek }}
        </td>
      </tr>
    </table>
  `,
  styles: [
  ]
})
export class Deneme7Component {
  adi = "";
  isimler: string[] = [];

  isimEkle() {
    this.isimler.push(this.adi);
    this.adi = "";
    console.log(this.isimler);
  }
}
