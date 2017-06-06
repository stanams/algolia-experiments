import algoliasearch from 'algoliasearch'
import config from './config'

const client = algoliasearch(config.algolia.id, config.algolia.apiKey);

export const movieIndex = client.initIndex('Movie');
