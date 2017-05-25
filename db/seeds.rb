require 'json'

file = Rails.root + 'db/movies.json'
movies_list = JSON.parse(File.read(file))

movies_list.each do |movie|
  Movie.create(movie.to_h)
end