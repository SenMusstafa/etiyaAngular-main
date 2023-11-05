import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolumListesiComponent } from './bolum-listesi/bolum-listesi.component';
import { PersonelDetayComponent } from './personel-detay/personel-detay.component';
import { PersonelListesiComponent } from './personel-listesi/personel-listesi.component';
import { SayfaBulunamadiComponent } from './sayfa-bulunamadi/sayfa-bulunamadi.component';

const routes: Routes = [
  { path: '', redirectTo: '/personeller', pathMatch: 'full' },
  // pathMatch özelliğine 'prefix' ya da 'full' yazılabiliyor.
  { path: 'personeller', component: PersonelListesiComponent},
  { path: 'bolumListesi', component: BolumListesiComponent},
  { path: 'personeller/:id', component: PersonelDetayComponent },
  { path: '**', component: SayfaBulunamadiComponent },
  // bunların dışında('personelListesi' ve 'bolumListesi')
  // verilen path'lerde kullanılacak component'i tanımlayan '**'
  // en son satırda olmalıdır.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
