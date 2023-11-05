import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personel } from '../bean/personel';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-listesi-detay',
  templateUrl: './personel-listesi-detay.component.html',
  styleUrls: ['./personel-listesi-detay.component.scss']
})
export class PersonelListesiDetayComponent implements OnInit, OnDestroy {
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
  }

  ngOnDestroy(): void {
    this.personellerSonucuSubscription?.unsubscribe();
  }
}
