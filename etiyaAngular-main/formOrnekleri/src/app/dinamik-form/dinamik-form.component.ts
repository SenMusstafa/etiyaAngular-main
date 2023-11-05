import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dinamik-form',
  templateUrl: './dinamik-form.component.html',
  styleUrls: ['./dinamik-form.component.scss']
})
export class DinamikFormComponent {
  kisiForm = this.fb.group({
    adi: '',
    epostalar: this.fb.array([])
  })
  constructor(public fb: FormBuilder) { }

  getEPostalar(): FormArray {
    return this.kisiForm.get('epostalar') as FormArray;
  }

  ePostaEkle() {
    // içeriği "" olan email FormControl objesi oluşturulup formdaki array'ye ekleniyor
    this.getEPostalar().push(this.fb.control(''));
  }

}
