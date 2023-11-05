import { Component } from '@angular/core';

import { Giris } from '../model/giris';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  public giris = new Giris('', '');

  submit() {
    console.log(this.giris);
  }
}
