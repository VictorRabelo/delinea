import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }

    this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url, error: 'Não autorizado' }});
    return false;
  }
}
