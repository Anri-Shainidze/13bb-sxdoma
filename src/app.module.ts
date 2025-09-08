import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardController } from './guard/guard.controller';
import { RouteService } from './route/route.service';

@Module({
  imports: [],
  controllers: [AppController, GuardController],
  providers: [AppService, RouteService],
})
export class AppModule {}
