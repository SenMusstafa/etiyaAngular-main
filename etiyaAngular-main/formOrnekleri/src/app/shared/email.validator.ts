import { AbstractControl } from '@angular/forms';

export function emailValidasyonu(control: AbstractControl): {[key: string]:any} | null {
  // calue içinde admin kelimesi geçiyor mu diye bakıyor
  const kontrol = /admin/.test(control.value);
  return kontrol ? { 'hata': {value: control.value} } : null;
}

export function emailEsitlikKontrolu(control: AbstractControl): { [key: string]: any } | null {
  const sifre = control.get('sifre');
  const sifre2 = control.get('sifre2');

  const sifreValue1 = sifre?.value;
  const sifreValue2 = sifre2?.value;

  return (sifre?.touched && sifre2?.touched && sifreValue1 != sifreValue2) ? { 'emailesitdegil': true } : null;
}
