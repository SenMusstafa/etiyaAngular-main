import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Personel } from '../model/personel';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-listesi',
  templateUrl: './personel-listesi.component.html',
  styleUrls: ['./personel-listesi.component.scss']
})
export class PersonelListesiComponent implements OnInit, OnDestroy {
  seciliPersonelId: string | null = null;
  paramsSubs: Subscription | undefined;

  personeller: Personel[] = [];

  constructor(
    private _personelService: PersonelService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnDestroy(): void {
    this.paramsSubs?.unsubscribe();
  }

  ngOnInit(): void {
    this.paramsSubs = this.route.paramMap.subscribe(
      {
        next: (paramMap) => this.seciliPersonelId = paramMap.get("id")
      }
    );
    this._personelService.getPersoneller().subscribe(
      {
        next: (sonuc) => this.personeller = sonuc
      }
    );
  }

  personelSecildi(p: Personel) {
    this.router.navigate([p.id], { relativeTo: this.route });
  }

}
