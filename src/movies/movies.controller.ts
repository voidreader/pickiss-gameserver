import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// * Nest.JS 를 위한 기초 연습

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching... ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: JSON) {
    return this.moviesService.create(movieData);
  }

  @Delete(`/:id`)
  remove(@Param('id') movieID: string): boolean {
    return this.moviesService.deleteOne(movieID);
  }

  @Patch(`/:id`)
  patch(@Param('id') movieID: string, @Body() updateData: JSON) {
    return this.moviesService.update(movieID, updateData);
  }

  // 여기 아래에 위치시키면 위에 Get(':/id' ) 때문에 동작하지 않는다. 순서를 위로 올려야함
  /*
  @Get('search')
  search() {
    return `we are searching...`;
  }
  */
}
