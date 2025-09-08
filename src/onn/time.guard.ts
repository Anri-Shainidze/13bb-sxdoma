import { CanActivate, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class routesControllBytimeGuard implements CanActivate {
  canActivate() {
    const validHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const currentHour = new Date().getHours();
    if (!validHours.includes(currentHour)) {
      return false;
    }
    return true;
  }
  
}
