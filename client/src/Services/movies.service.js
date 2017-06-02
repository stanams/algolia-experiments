import { AbstractService } from './abstract.service'

const url = '/api/movies'
const headers = "'Content-Type': 'application/json'"

export class MoviesService extends AbstractService {
  static addMovie = (movie) => (
    fetch(url, {
      method: 'POST',
      headers: {
        headers
      },
      body: JSON.stringify({
        movie: {
          "title": movie.title,
          "alternative_titles": movie.alternative_titles,
          "year": movie.year,
          "image": movie.image,
          "rating": movie.rating,
          "actors": movie.actors,
          "genre": movie.genre
          }
        }
      )
    })
    .then(MoviesService.checkStatus)
    .then(MoviesService.parseJSON)
    .catch(MoviesService.handleError)
  )
}
