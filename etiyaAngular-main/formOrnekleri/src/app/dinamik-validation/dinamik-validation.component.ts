import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamik-validation',
  templateUrl: './dinamik-validation.component.html',
  styleUrls: ['./dinamik-validation.component.scss']
})
export class DinamikValidationComponent implements OnInit {

  kisiForm = this.fb.group({
    adi: '',
    eposta: [''],
    epostaIstiyorum: false
  })
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {

    this.kisiForm.get('epostaIstiyorum')?.valueChanges.subscribe(
      value => {
        const eposta = this.kisiForm.get('eposta');
        if (value) {
          eposta?.setValidators(Validators.required);
        } else {
          eposta?.clearValidators();
        }
        eposta?.updateValueAndValidity();
      }
    );
  }
}
