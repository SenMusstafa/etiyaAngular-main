import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme3',
  template: `
  <input #giris type="text" />
  <button (click)="deneme(giris)">Test</button>
  <button (click)="deneme(giris.value)">Test2</button>
  `,
  styles: [``]
})
export class Deneme3Component {
  deneme(deger: any) {
    console.log("Butona basıldı", deger);
 }
}
