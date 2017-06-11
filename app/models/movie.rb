class Movie < ApplicationRecord
  validates :title, :actors, :genre, :rating, :year, :image, presence: true
  # validates :title, uniqueness: true
  
  include AlgoliaSearch

  algoliasearch do
    attributes :title,
               :alternative_titles,
               :actors,
               :genre,
               :score,
               :rating,
               :year,
               :image,
               :color,
               :alternative_titles,
               :id

    searchableAttributes ['title', 'alternative_titles', 'actors']
    attributesForFaceting [:genre]
    customRanking ['desc(rating)']
  end
end
