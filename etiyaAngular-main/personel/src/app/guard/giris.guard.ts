import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const girisGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).girisYapilmis()) {
    return true
  }
  // giriş yapılmamış
  // giriş sayfasına yönlendir
  inject(Router).navigate(['/'])
  return false;
};
