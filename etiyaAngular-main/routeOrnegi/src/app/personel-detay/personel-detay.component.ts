import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Personel } from '../model/personel';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-detay',
  templateUrl: './personel-detay.component.html',
  styleUrls: ['./personel-detay.component.scss']
})
export class PersonelDetayComponent implements OnInit, OnDestroy {
  personel: Personel | undefined;
  paramsSubscribe: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private _personelService: PersonelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Component kendini tekrar çağırdığında ngOnInit metodu tekrar çalıştırılmadığından
    // parametrelerin yeni değerleni okunamıyor. Bu yüzden parametre
    // değer okumalarını snapshot üzerinden yapmıyoruz.

    // let paramId = this.route.snapshot.paramMap.get('id');

    this.paramsSubscribe = this.route.paramMap.subscribe(
      {
        next: (paramMap) => {
          let paramId = paramMap.get('id');
          this._personelService.getPersoneller().subscribe(
            {
              next: (personeller) => {
                // sunucudan gelen personel listesindeki aynı id'li personel bulunuyor.
                let bulunanPersoneller = personeller.filter(p => p.id.toString() == paramId);
                // personel bulundu ise
                if (bulunanPersoneller.length > 0) {
                  this.personel = bulunanPersoneller[0];
                } else {
                  // personel bulunamadi ise this.personel değişkeni undefined yapılır.
                  // Bu sayede ekranda personel bulunamadı yazısı yazar.
                  this.personel = undefined;
                }
              }
            }
          );
        }
      }
    );

  }

  ngOnDestroy(): void {
    this.paramsSubscribe?.unsubscribe();
  }

  geri() {
    // opsiyonel parametre
    this.router.navigate(['../', {"id":this.personel?.id}], { relativeTo: this.route});
  }

  oncekiPersonel() {
    let oncekiPersonelId = this.personel!.id - 1;
    if (oncekiPersonelId > 0) {
      this.router.navigate(['../', oncekiPersonelId], { relativeTo: this.route} );
    }
  }

  sonrakiPersonel() {
    let sonrakiPersonelId = this.personel!.id + 1;
    this.router.navigate(['../', sonrakiPersonelId], { relativeTo: this.route} );
  }
}
