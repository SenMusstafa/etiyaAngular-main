import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent {
  // fontawesome iconları
  faUser = faUser
  faKey = faKey

  girisForm = this.fb.group({
    email: '',
    sifre: '',
    hatirla: false
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  giris() {
    const email: string = this.girisForm.get('email')!.value+"";
    const password: string = this.girisForm.get('sifre')!.value + "";

    this.auth.girisYap({ email, password }) /* { email: email, password: password } */
      .then(
        (login) => {
          if (login) {
            // giriş başarılı
            this.router.navigate(['/anaMenu'])
          } else {
            // giriş hatalı oldu
            alert("giriş başarısız")
          }
        }
      )
      .catch(
        (err) => {
          // giriş hatalı oldu
            alert("giriş başarısız")
        }
      );
  }
}
