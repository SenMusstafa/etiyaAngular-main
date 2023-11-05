import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme5',
  template: `
    <input type="text" [(ngModel)]="adi" /> <br />
    <div class="hata" *ngIf="adi==''">Bu alanı boş geçemezsiniz.</div><br/>
    <div class="hata" [class.gorunmez]="adi!=''">Bu alanı boş geçemezsiniz.(2)</div><br/>
    <br/>
    <div *ngIf="adi=='';else adidolu">Adı boş</div>

    <ng-template #adidolu>
      Adı alanı dolu(template)
    </ng-template>

    <ng-template #adibos>
      Adı alanı boş(template)
    </ng-template>
    <br/>
    <div *ngIf="adi=='';then adibos;else adidolu"></div>
  `,
  styles: [`
    .hata {
      color: red;
      font-weight: bold;
    }
    .gorunmez {
      visibility: hidden;
    }
  `
  ]
})
export class Deneme5Component {
  adi = "";
}
