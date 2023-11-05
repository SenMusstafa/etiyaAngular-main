import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailEsitlikKontrolu, emailValidasyonu } from '../shared/email.validator';
/*
Reactive Form için:

2-way binding kullanılmıyor.
karmaşık formlar için uygun.
Dinamik form alanları destekliyor.
Custom Validation desteği
Dinamik Validation
Unit test
*/

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) { }

//  kayitFormu = new FormGroup({
//    eposta: new FormControl('levent@hotmail.com'),
//    sifre: new FormControl('123'),
//    sifre2: new FormControl('123'),
//    adres: new FormGroup({
//      il: new FormControl(''),
//      ilce: new FormControl('')
//    }),
//  });
  kayitFormu = this.fb.group({
    eposta: ['levent@hotmail.com', Validators.required],
    sifre: ['', [ Validators.required, Validators.minLength(3), emailValidasyonu] ],
    sifre2: [''],
    adres: this.fb.group({
      il: 'İstanbul',
      ilce: 'Kızıltoprak'
    })
  }, { validators: [ emailEsitlikKontrolu ]});

  epostaHatali(): boolean | undefined {
    return this.kayitFormu.get('eposta')?.invalid && this.kayitFormu.get('eposta')?.touched;
  }

  sifreHatali(): boolean | undefined {
    return this.kayitFormu.get('sifre')?.invalid && this.kayitFormu.get('sifre')?.touched;
  }

  bilgileriGetir() {
    this.kayitFormu.setValue({
      eposta: "test@gmail.com",
      sifre: "abc",
      sifre2: "abc",
      adres: {
        il: "İstanbul",
        ilce: "Kadıköy"
      }
    });
  }
  sifreleriSifirla() {
    this.kayitFormu.patchValue({
      sifre: "",
      sifre2: ""
    });
  }
}
