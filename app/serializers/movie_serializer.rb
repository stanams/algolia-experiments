class MovieSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
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
end
