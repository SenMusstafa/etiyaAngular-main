import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme',
  template: `<button (click)="butonaBasildi($event)">Deneme Butonu</button>
             <input type="text" value="Levent"
                [id]="input1" [disabled]="input1Pasif" />
                {{ sonuc() }}
            `,
  styles: [``]
})
export class DenemeComponent {
  input1 = "text1";
  input1Pasif = false;
  a = 3;

  butonaBasildi(e: MouseEvent) {
    console.log("Butona basıldı", e.type);
    this.a = 10; // ekranda sonuc() fonsksiyonunun
    // sonucunu döndüren interpolasyon da güncelleniyor
  }

  sonuc() {
    return this.a + 5;
  }
}
