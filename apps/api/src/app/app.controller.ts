import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('games')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllGames() {
    console.log('API Controller :: getAllGames')
    return this.appService.getAllGames();
  }

  @Get('/:id')
  getGame(@Param('id') id: string) {
    console.log('API Controller :: getGame :: ', id)
    return this.appService.getGame(id);
  }
}
