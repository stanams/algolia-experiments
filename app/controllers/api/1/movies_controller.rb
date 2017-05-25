class API::MoviesController < ApplicationController
  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render :show
    else
      render json: @movie.errors.full_messages
    end
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
