import { Component, OnInit } from '@angular/core';
import { Personel } from '../model/personel';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-listesi',
  templateUrl: './personel-listesi.component.html',
  styleUrls: ['./personel-listesi.component.scss']
})
export class PersonelListesiComponent implements OnInit {
  personeller: Personel[] = [];

  constructor(private _personelService: PersonelService) { }

  ngOnInit(): void {
    this._personelService.getPersoneller().subscribe({
      next: (personeller) => this.personeller = personeller,
      error:  (err) => console.log(err)
    });
  }

}
