import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {
    console.log(process.env.NODE_ENV);
    console.log(this.configService.get(`MYSQL_HOST`));
  }

  @Get()
  home() {
    return '';
  }
}
