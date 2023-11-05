import { Component } from '@angular/core';

@Component({
  selector: 'app-odev',
  templateUrl: './odev.component.html',
  styleUrls: ['./odev.component.scss']
})
export class OdevComponent {
  sayi = 0;
  sayilar: number[] = [];

  hesapla() {
    this.sayilar.length = 0;
    for (let i = 0; i < this.sayi; i++) {
      this.sayilar.push(i + 1);
    }
  }

}
