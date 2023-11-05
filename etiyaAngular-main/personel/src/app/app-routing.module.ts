import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaMenuComponent } from './ana-menu/ana-menu.component';
import { GirisComponent } from './giris/giris.component';
import { girisGuard } from './guard/giris.guard';
import { PersonelListesiComponent } from './personel-listesi/personel-listesi.component';

const routes: Routes = [
  { path: '', redirectTo: '/giris', pathMatch: 'full' },
  { path: 'anaMenu', component: AnaMenuComponent, canActivate: [girisGuard] },
  { path: 'giris', component: GirisComponent },
  { path: 'personelListesi', component: PersonelListesiComponent, canActivate: [girisGuard] },
  { path: '**', redirectTo: '/anaMenu'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
