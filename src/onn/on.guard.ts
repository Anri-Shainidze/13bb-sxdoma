import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

@Injectable()
export class OnGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Array<string>>(
      'role',
      context.getHandler(),
    );
    const {
      query: { role },
    } = context.switchToHttp().getRequest<Request>();
    if (!requiredRoles) {
      return true;
    }
    if (typeof role !== 'string') {
      return false;
    }
    return requiredRoles.includes(role);
  }
}
