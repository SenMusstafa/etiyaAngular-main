import '@angular/common/locales/de';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-ornegi',
  template: `
    Tarih: {{ tarih }}<br/>
    Tarih (): {{ tarih | date }}<br/>
    <br/>
    Tarih (short): {{ tarih | date : 'short' }}<br/>
    Tarih (medium): {{ tarih | date : 'medium' }}<br/>
    Tarih (long): {{ tarih | date : 'long' }}<br/>
    Tarih (full): {{ tarih | date : 'full' }}<br/>
    <br/>
    Tarih (short date): {{ tarih | date : 'shortDate' }}<br/>
    Tarih (medium date): {{ tarih | date : 'mediumDate' }}<br/>
    Tarih (long date): {{ tarih | date : 'longDate' }}<br/>
    Tarih (full date): {{ tarih | date : 'fullDate' }}<br/>
    <br/>
    Tarih (short time): {{ tarih | date : 'shortTime' }}<br/>
    Tarih (medium time): {{ tarih | date : 'mediumTime' }}<br/>
    Tarih (long time): {{ tarih | date : 'longTime' }}<br/>
    Tarih (full time): {{ tarih | date : 'fullTime' }}<br/>
    <br/>
    Tarih (custom): {{ tarih | date : 'dd/MM/yyyy HH:mm' }}<br/>
    Tarih (custom): {{ tarih | date : 'fullDate': undefined : 'tr' }}<br/>

`,
  styles: [
  ]
})
export class PipeOrnegiComponent {
  tarih = new Date();
}
