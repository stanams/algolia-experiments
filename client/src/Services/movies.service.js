import { AbstractService } from './abstract.service'
import { movieIndex } from '../Core/algoliaClient'
import apis from '../Core/apis'



export default class MoviesService extends AbstractService {
  static addMovie = (movie) => (
    fetch(apis.moviesUrl, {
      method: 'POST',
      headers: apis.headers,
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

  static searchMovies(query, page = 0) {
    return new Promise((resolve, reject) => {
      movieIndex.search({query, page}, function searchDone(err, content) {
        if (err) {
          return reject(err)
        }
      
        resolve(content)
      })
    })
  }

  static deleteMovie(movieObjectID) {
    return fetch(`${apis.moviesUrl}/${movieObjectID}`, {
      method: 'DELETE',
      headers: apis.headers
    })
    .then(MoviesService.checkStatus)
    .then(MoviesService.parseJSON)
    .catch(MoviesService.handleError)
  }
}