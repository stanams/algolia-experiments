# Experimenting with Algolia API (back & front)

This webapp is built with ruby 2.4, rails 5.0.3, SQLite 3 as DB and Algolia Rails for the back end, and with react 15.5.4, redux 3.6 for the front using algoliasearch client and react-semantic-ui.

To run the app:

- make sur you have ruby 2.3 and rails 5 installed
- make sure you have node 6 or + and npm installed
- download this repo or do `git clone https://github.com/stanams/algolia-experiments.git`
- to install back and front dependencies and run the server:
```sh
$ cd movilia
$ bundle install
$ cd client
$ npm install
$ cd ..
$ foreman start
```

You should see a window open at localhost:5000. If you don't, just manually go to [http://localhost:5000](http://localhost:5000)

To run the tests, just go to _movilia/client_ and run:
```sh
$ npm test
$ a
```
