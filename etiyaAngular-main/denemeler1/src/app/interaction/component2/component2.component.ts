import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  @Input() gonderilenIsim = "";
  @Output() gonderilenYas = new EventEmitter();
  yas = "";

  yasiGonder() {
    this.gonderilenYas.emit(this.yas);
  }
}
