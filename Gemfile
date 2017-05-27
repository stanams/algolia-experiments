source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.3'

gem 'sqlite3'

gem 'puma', '~> 3.0'

group :development, :test do
  
  gem 'byebug', platform: :mri
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '~> 2.0'
  gem 'pry-rails'
  gem 'annotate'
  gem 'better_errors'
  gem 'binding_of_caller'
end

gem 'foreman', '~> 0.82.0'

gem 'algoliasearch-rails'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
