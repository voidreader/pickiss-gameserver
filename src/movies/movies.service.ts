import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create.-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID: ${id}`);
      // => {"statusCode":404, "message":"내가쓴메세지", "error":"Not Found"}
    }
    return movie;
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    console.log('in update ', movie);
    console.log('in update #2', updateData);
    this.deleteOne(id);

    const newMovie = { ...movie, ...updateData };
    console.log('in update #3', newMovie);
    this.movies.push({ ...movie, ...updateData });
  }
}
