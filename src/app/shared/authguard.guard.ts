import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';


export const authguardGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const router = inject(Router)
  if (loginService.isLogged()) {
    return true;
  }else{
    router.navigate(['login'])
  }
  return true;
};
