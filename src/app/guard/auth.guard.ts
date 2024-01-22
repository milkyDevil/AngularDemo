import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { IUser } from '../Store/Model/LoginRegister.model';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);
  const userinfo: IUser = service.getUserFromLocalStore();
  if (userinfo.userId != 0 && userinfo.name != '') {
    return true;
  } else {
    router.navigate(['loginregister']);
    return false;
  }
};
