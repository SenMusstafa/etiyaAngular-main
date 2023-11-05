import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme1',
  template: `
  <div class="kirmizi">Merhaba</div>
  <div [class]="'yesil'">Merhaba</div>
  <div [class]="hatali">Merhaba
    <button (click)="basildi()">Test</button>
  </div>
  <div [class.yesil]="bool1">Deneme
     <button (click)="bool1 = !bool1">Test</button>
  </div>
  <div class="kirmizi" [class] = "'yesil'">İki Yöntemi Kullanmayın. Class property'si diğerini eziyor.</div>
  <div [ngClass]="tumOzelliklerSinifi">Tum özellikler
     <button (click)="basildi2()">Test</button>
  </div>
  `,
  styles: [`
      .yesil {
        color: green;
      }
      .kirmizi {
        color: red;
      }
      .buyuk {
        font-size: 1.5rem;
      }
  `]
})
export class Deneme1Component {
  hatali = "kirmizi";
  bool1 = false;
  tumOzelliklerSinifi = {
    "yesil": true,
    "buyuk": this.bool1
  };
  basildi() {
    this.hatali = "yesil";
  }
  basildi2() {
    this.tumOzelliklerSinifi.buyuk = !this.tumOzelliklerSinifi.buyuk;
    this.tumOzelliklerSinifi.yesil = false;
  }
}
