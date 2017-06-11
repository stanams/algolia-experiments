export const GENRES = [
  { value: 'drama', label: 'Drama' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'romance', label: 'Romance' },
  { value: 'history', label: 'History' },
  { value: 'animation', label: 'Animation' },
  { value: 'horror', label: 'Horror' },
  { value: 'western', label: 'Western' },
  { value: 'crime', label: 'Crime' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'action', label: 'Action' },
  { value: 'family', label: 'Family' },
  { value: 'music', label: 'Music' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'science-fiction', label: 'Science Fiction' },
  { value: 'war', label: 'War' }
]

export let YEARS = []
for (let i = 2018; i > 1899; i--) {
  YEARS.push(
    { value: i, label: i }
  )
}