import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteService {
  getAll() {
    return 'Hello from route';
  }
}
