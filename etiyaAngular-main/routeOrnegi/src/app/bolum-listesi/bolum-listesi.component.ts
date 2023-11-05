import { Component } from '@angular/core';
import { Bolum } from '../model/bolum';
import { BolumService } from '../service/bolum.service';

@Component({
  selector: 'app-bolum-listesi',
  templateUrl: './bolum-listesi.component.html',
  styleUrls: ['./bolum-listesi.component.scss']
})
export class BolumListesiComponent {
  bolumler: Bolum[] = [];

  constructor(private _bolumService: BolumService) { }

  ngOnInit(): void {
    this._bolumService.getBolumler().subscribe(
      {
        next: (sonuc) => this.bolumler = sonuc
      }
    );
  }
}
