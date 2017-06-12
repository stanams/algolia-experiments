class Api::MoviesController < ApplicationController
  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render json: @movie,
                   status: 201,
                   serializer: Api::MovieSerializer
    else
      render json: @movie.errors.full_messages
    end
  end

  def destroy
    Movie.find(params[:id]).destroy
  end

  private
  def movie_params
    params.require(:movie)
          .permit(:title,
                  :alternative_titles,
                  :image,
                  :year,
                  :color,
                  :score,
                  :rating,
                  :actors,
                  :actor_facets,
                  :genre,
                  :objectID)
  end
end
