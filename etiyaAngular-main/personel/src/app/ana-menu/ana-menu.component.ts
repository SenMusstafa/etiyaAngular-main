import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-ana-menu',
  templateUrl: './ana-menu.component.html',
  styleUrls: ['./ana-menu.component.scss']
})
export class AnaMenuComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }
  cikis() {
    this.auth.cikisYap();
    this.router.navigate(['/giris'])
  }
}
