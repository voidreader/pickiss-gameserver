import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';
import { App } from './app/app';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [App],
})
export class AppModule {}
