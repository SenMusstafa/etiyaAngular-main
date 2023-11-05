import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme2',
  template: `
  <div [style.color]="renk">Deneme</div>
  <div [ngStyle]="stiller">Deneme2
    <button (click)="button1()">Test</button>
  </div>

  `,
  styles: [``]
})
export class Deneme2Component {
  renk = "blue";
  stiller = {
    "color": "red",
    "font-weight": "bold",
    "font-size": "1.5rem",
    "text-decoration": ""
  }
  button1() {
    this.stiller.color = "magenta";
    this.stiller["text-decoration"] = "line-through";
  }
}
