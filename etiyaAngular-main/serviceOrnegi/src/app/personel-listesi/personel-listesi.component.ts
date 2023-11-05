import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { Personel } from '../bean/personel';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-listesi',
  templateUrl: './personel-listesi.component.html',
  styleUrls: ['./personel-listesi.component.scss']
})
export class PersonelListesiComponent implements OnInit, OnDestroy {
  personeller: Personel[] = [];
  personellerSonucuSubscription: Subscription | undefined;

  constructor(private personelService: PersonelService) { }

  ngOnInit(): void {
    this.personellerSonucuSubscription = this.personelService.getPersoneller().subscribe(
      {
        next: (sonuc) => this.personeller = sonuc,
        error: (hata) => console.error(hata),
        complete: () => console.log("sonuc geldi.")
      }
    );
    // Observable sınıfını kendimiz de yaratıp, kullanabiliyoruz:
    of('Ali', 'Levent', 'Yasemin').subscribe(
      {
        next: (sonuc) => console.log("Gelen sonuc: " + sonuc),
        complete: () => console.log("isimlerin okunduğu observable bitti.")
      }
    );
  }

  ngOnDestroy(): void {
    this.personellerSonucuSubscription?.unsubscribe();
  }

}
