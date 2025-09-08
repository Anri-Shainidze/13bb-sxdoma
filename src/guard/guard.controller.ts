import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/role.decorator';
import { ApiKeyGuard } from 'src/onn/api.guard';
import { OnGuard } from 'src/onn/on.guard';
import { routesControllBytimeGuard } from 'src/onn/time.guard';

@Controller('guard')



export class GuardController {
  @Roles('admin')
  @UseGuards(OnGuard)
  @Get()
  getAll() {
    return 'Hello from guard';
  }



  @Get('secure')
  @UseGuards(ApiKeyGuard)
  getSecureData() {
    return { message: 'You accessed this using a valid API key 🚀' };
  }
  @Get('time')
  @UseGuards(routesControllBytimeGuard)
  getTimeRestrictedData() {
    return { message: 'You are within the allowed time range! ⏰' };
  }
}
