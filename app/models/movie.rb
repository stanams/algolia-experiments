class Movie < ApplicationRecord
  validates_presence_of Movie.attribute_names
  
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
               :actors,
               :alternative_titles

    searchableAttributes ['title', 'alternative_titles', 'actors']
    attributesForFaceting [:genre]
    customRanking ['desc(rating)']
  end

  algoliasearch force_utf8_encoding: true do
    attributes :title, :alternative_titles
  end
end
