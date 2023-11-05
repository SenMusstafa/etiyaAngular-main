import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme6',
  template: `
  Bir renk adı giriniz (mavi, kırmızı, yeşil olabilir) <br/>
    <input type="text" [(ngModel)]="renk" />
    <div [ngSwitch]="renk">
      <div *ngSwitchCase="'mavi'">Mavi rengi çok severim.</div>
      <div *ngSwitchCase="'kırmızı'">Kırmızı heyecandır.</div>
      <div *ngSwitchCase="'yeşil'">Yeşil huzurdur.</div>
      <div *ngSwitchDefault>Bu rengi bilmiyorum.</div>
    </div>
  `,
  styles: [
  ]
})
export class Deneme6Component {
  renk = "";
}
