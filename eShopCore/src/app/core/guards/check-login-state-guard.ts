import { CanActivateFn } from '@angular/router';

export const checkLoginStateGuard: CanActivateFn = (route, state) => {
  return true;
};
