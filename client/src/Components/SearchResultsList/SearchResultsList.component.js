import React from 'react'
import { SearchResultsListItem } from '../SearchResultsListItem/SearchResultsListItem.component'
import './SearchResultsList.component.css'

const data =
[
  {
    "title" : "12 Angry Men",
    "alternative_titles" : "[\"Twelve Angry Men\", \"La Parola ai Giurati\", \"12 hommes en colère\", \"Tizenkét dühös ember\", \"Die 12 Geschworenen\", \"12 Homens e uma Sentença\", \"Doze Homens e uma Sentença\", \"十二怒漢\", \"doce hombres sin piedad\", \"Douze hommes en colère\", \"12 hombres en pugna\"]",
    "actors" : "[\"Henry Fonda\", \"Lee J. Cobb\", \"Ed Begley\", \"E.G. Marshall\", \"Jack Warden\", \"Martin Balsam\", \"John Fiedler\", \"Jack Klugman\", \"Edward Binns\", \"George Voskovec\", \"Robert Webber\", \"Rudy Bond\"]",
    "genre" : "[\"Drama\"]",
    "score" : "9.87145038167939",
    "rating" : 5,
    "year" : 1957,
    "image" : "https://image.tmdb.org/t/p/w154/qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg",
    "color" : "#BCAC26",
    "objectID" : "9",
    "_highlightResult" : {
      "title" : {
        "value" : "12 Angry Men",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "alternative_titles" : {
        "value" : "[\"Twelve Angry Men\", \"La Parola ai Giurati\", \"12 hommes en colère\", \"Tizenkét dühös ember\", \"Die 12 Geschworenen\", \"12 Homens e uma Sentença\", \"Doze Homens e uma Sentença\", \"十二怒漢\", \"doce hombres sin piedad\", \"Douze hommes en colère\", \"12 hombres en pugna\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "actors" : {
        "value" : "[\"Henry Fonda\", \"Lee J. Cobb\", \"Ed Begley\", \"E.G. Marshall\", \"Jack Warden\", \"Martin Balsam\", \"John Fiedler\", \"Jack Klugman\", \"Edward Binns\", \"George Voskovec\", \"Robert Webber\", \"Rudy Bond\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      }
    },
    "_rankingInfo" : {
      "nbTypos" : 0,
      "firstMatchedWord" : 0,
      "proximityDistance" : 0,
      "userScore" : 5891,
      "geoDistance" : 0,
      "geoPrecision" : 0,
      "nbExactWords" : 0,
      "words" : 0,
      "filters" : 0
    }
  }, {
    "title" : "Whiplash",
    "alternative_titles" : "[\"進擊的鼓手\", \"Whiplash - Nos Limites\", \"Whiplash: Em Busca da Perfeição\", \"Одержимість\", \"Віплеш\", \"Батіг\"]",
    "actors" : "[\"Miles Teller\", \"J.K. Simmons\", \"Melissa Benoist\", \"Austin Stowell\", \"Jayson Blair\", \"Paul Reiser\", \"Chris Mulkey\", \"Damon Gupton\", \"Max Kasch\", \"Jayson Blair\"]",
    "genre" : "[\"Drama\"]",
    "score" : "9.88157524613221",
    "rating" : 5,
    "year" : 2014,
    "image" : "https://image.tmdb.org/t/p/w154/9FJuR1KTkiVT6FIxAnK6B4O0DpI.jpg",
    "color" : "#221111",
    "objectID" : "8",
    "_highlightResult" : {
      "title" : {
        "value" : "Whiplash",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "alternative_titles" : {
        "value" : "[\"進擊的鼓手\", \"Whiplash - Nos Limites\", \"Whiplash: Em Busca da Perfeição\", \"Одержимість\", \"Віплеш\", \"Батіг\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "actors" : {
        "value" : "[\"Miles Teller\", \"J.K. Simmons\", \"Melissa Benoist\", \"Austin Stowell\", \"Jayson Blair\", \"Paul Reiser\", \"Chris Mulkey\", \"Damon Gupton\", \"Max Kasch\", \"Jayson Blair\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      }
    },
    "_rankingInfo" : {
      "nbTypos" : 0,
      "firstMatchedWord" : 0,
      "proximityDistance" : 0,
      "userScore" : 5890,
      "geoDistance" : 0,
      "geoPrecision" : 0,
      "nbExactWords" : 0,
      "words" : 0,
      "filters" : 0
    }
  }, {
    "title" : "The Fault in Our Stars",
    "alternative_titles" : "[\"Nos Etoiles Contraires\", \"Colpa delle stelle\", \"命运的错\", \"生命中的美好缺憾\", \"无比美妙的痛苦\", \"Bajo La Misma Estrella\", \"A Culpa é das Estrelas\", \"Bajo la misma estrella\", \"Krive su zvezde\"]",
    "actors" : "[\"Shailene Woodley\", \"Ansel Elgort\", \"Nat Wolff\", \"Laura Dern\", \"Sam Trammell\", \"Willem Dafoe\", \"Lotte Verbeek\", \"Mike Birbiglia\"]",
    "genre" : "[\"Romance\", \"Drama\"]",
    "score" : "9.91089947089947",
    "rating" : 5,
    "year" : 2014,
    "image" : "https://image.tmdb.org/t/p/w154/sc6XLX6J714LDkVV3Ys3clgypQS.jpg",
    "color" : "#715E50",
    "objectID" : "7",
    "_highlightResult" : {
      "title" : {
        "value" : "The Fault in Our Stars",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "alternative_titles" : {
        "value" : "[\"Nos Etoiles Contraires\", \"Colpa delle stelle\", \"命运的错\", \"生命中的美好缺憾\", \"无比美妙的痛苦\", \"Bajo La Misma Estrella\", \"A Culpa é das Estrelas\", \"Bajo la misma estrella\", \"Krive su zvezde\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "actors" : {
        "value" : "[\"Shailene Woodley\", \"Ansel Elgort\", \"Nat Wolff\", \"Laura Dern\", \"Sam Trammell\", \"Willem Dafoe\", \"Lotte Verbeek\", \"Mike Birbiglia\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      }
    },
    "_rankingInfo" : {
      "nbTypos" : 0,
      "firstMatchedWord" : 0,
      "proximityDistance" : 0,
      "userScore" : 5889,
      "geoDistance" : 0,
      "geoPrecision" : 0,
      "nbExactWords" : 0,
      "words" : 0,
      "filters" : 0
    }
  }, {
    "title" : "The Imitation Game",
    "alternative_titles" : "[\"模拟游戏\", \"Imitation Game\", \"O Jogo da Imitação\", \"模仿遊戲\", \"Le jeu de l'imitation\", \"Yapay Oyun\", \"Імітаційна гра\", \"Descifrando Enigma\"]",
    "actors" : "[\"Benedict Cumberbatch\", \"Keira Knightley\", \"Matthew Goode\", \"Rory Kinnear\", \"Allen Leech\", \"Matthew Beard\", \"Charles Dance\", \"Mark Strong\", \"James Northcote\", \"Tom Goodman-Hill\", \"Steven Waddington\", \"Ilan Goodman\", \"Jack Tarlton\", \"Alex Lawther\", \"Jack Bannon\", \"Tuppence Middleton\", \"Matthew Beard\"]",
    "genre" : "[\"History\", \"Drama\", \"Thriller\", \"War\"]",
    "score" : "9.91688055281342",
    "rating" : 5,
    "year" : 2014,
    "image" : "https://image.tmdb.org/t/p/w154/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg",
    "color" : "#192229",
    "objectID" : "6",
    "_highlightResult" : {
      "title" : {
        "value" : "The Imitation Game",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "alternative_titles" : {
        "value" : "[\"模拟游戏\", \"Imitation Game\", \"O Jogo da Imitação\", \"模仿遊戲\", \"Le jeu de l'imitation\", \"Yapay Oyun\", \"Імітаційна гра\", \"Descifrando Enigma\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      },
      "actors" : {
        "value" : "[\"Benedict Cumberbatch\", \"Keira Knightley\", \"Matthew Goode\", \"Rory Kinnear\", \"Allen Leech\", \"Matthew Beard\", \"Charles Dance\", \"Mark Strong\", \"James Northcote\", \"Tom Goodman-Hill\", \"Steven Waddington\", \"Ilan Goodman\", \"Jack Tarlton\", \"Alex Lawther\", \"Jack Bannon\", \"Tuppence Middleton\", \"Matthew Beard\"]",
        "matchLevel" : "none",
        "matchedWords" : []
      }
    },
    "_rankingInfo" : {
      "nbTypos" : 0,
      "firstMatchedWord" : 0,
      "proximityDistance" : 0,
      "userScore" : 5888,
      "geoDistance" : 0,
      "geoPrecision" : 0,
      "nbExactWords" : 0,
      "words" : 0,
      "filters" : 0
    }
  }
]

export const SearchResultsList = () => {
  return (
    <ul className='result-list-container'>
      {data.map(movie => (
        <SearchResultsListItem key={movie.objectID} movie={movie}/>     
      ))}
    </ul>
  )   
}
