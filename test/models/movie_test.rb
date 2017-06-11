require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  RSpec.describe Movie, :type => :model do
    it "is valid with valid attributes" do
      movie = Movie.new(
        title: 'a crazy title',
        actors: 'john doe',
        genre: 'drama',
        rating: 3,
        year: 2010,
        image: 'http://media.comicbook.com/files/img/default-movie.png')
      expect(movie).to be_valid
    end

    it "is not valid without a title" do
      movie = Movie.new(title: nil)
      expect(movie).to_not be_valid
    end

    it "is not valid without an actors at least" do
      movie = Movie.new(actors: nil)
      expect(movie).to_not be_valid
    end

    it "is not valid without a genre" do
      movie = Movie.new(genre: nil)
      expect(movie).to_not be_valid
    end

    it "is not valid without a rating" do
      movie = Movie.new(rating: nil)
      expect(movie).to_not be_valid
    end
    
    it "is not valid without a year" do
      movie = Movie.new(rating: nil)
      expect(movie).to_not be_valid
    end

    it "is not valid without an image" do
      movie = Movie.new(image: nil)
      expect(movie).to_not be_valid
    end
    
  end
end
