import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme4',
  template: `
  <input type="text" [(ngModel)] = "adi" />
  {{ adi }}
  <br/>
  <button (click)="adiniDegistir()">Adını Değiştir</button>
  `,
  styles: [``]
})
export class Deneme4Component {
  adi = "";
  isim?: string | null;
  deger: { id: number, adi: string } = { id: 5, adi: "Ali" };

  isimUzunlugunuYaz() {
    if (this.isim != null) {
      console.log(this.isim != null ? this.isim.length : "");
    }
    console.log(this.isim != null ? this.isim.length : "");
    console.log(this.isim?.length);
  }
  adiniDegistir() {
    this.adi = "Kamuran";
  }
}
