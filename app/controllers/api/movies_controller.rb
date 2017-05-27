class Api::MoviesController < ApplicationController
  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render json: @movie
    else
      render json: @movie.errors.full_messages
    end
  end

  def index
    movies = Movie.first(10)
    render json: movies
  end

  def destroy
  end

  private
  def movie_params
    params.require(:movie)
          .permit(:title,
                  :alternative_titles,
                  :image,
                  :color,
                  :score,
                  :rating,
                  :actors,
                  :actor_facets,
                  :genre,
                  :objectID)
  end
end
