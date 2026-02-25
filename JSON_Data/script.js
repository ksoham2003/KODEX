var movie = [
    {
      "image": "https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg",
      "name": "The Shawshank Redemption",
      "year": 1994,
      "duration": "2h 22m",
      "age_rating": "R",
      "rating": 9.3,
      "user_ratings_count": 2900000
    },
    {
      "image": "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      "name": "The Dark Knight",
      "year": 2008,
      "duration": "2h 32m",
      "age_rating": "PG-13",
      "rating": 9.0,
      "user_ratings_count": 3000000
    },
    {
      "image": "https://i.pinimg.com/1200x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg",
      "name": "The Godfather",
      "year": 1972,
      "duration": "2h 55m",
      "age_rating": "R",
      "rating": 9.2,
      "user_ratings_count": 2000000
    },
    {
      "image": "https://i.pinimg.com/1200x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
      "name": "Interstellar",
      "year": 2014,
      "duration": "2h 49m",
      "age_rating": "PG-13",
      "rating": 8.7,
      "user_ratings_count": 2100000
    },
    {
      "image": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      "name": "Inception",
      "year": 2010,
      "duration": "2h 28m",
      "age_rating": "PG-13",
      "rating": 8.8,
      "user_ratings_count": 2500000
    },
    {
      "image": "https://i.pinimg.com/736x/95/b2/21/95b221f97fe2efa863aa08da1fc279be.jpg",
      "name": "Fight Club",
      "year": 1999,
      "duration": "2h 19m",
      "age_rating": "R",
      "rating": 8.8,
      "user_ratings_count": 2300000
    },
    {
      "image": "https://i.pinimg.com/1200x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.jpg",
      "name": "Forrest Gump",
      "year": 1994,
      "duration": "2h 22m",
      "age_rating": "PG-13",
      "rating": 8.8,
      "user_ratings_count": 2400000
    },
    {
      "image": "https://i.pinimg.com/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg",
      "name": "The Matrix",
      "year": 1999,
      "duration": "2h 16m",
      "age_rating": "R",
      "rating": 8.7,
      "user_ratings_count": 2000000
    },
    {
      "image": "https://i.pinimg.com/736x/bb/f7/0c/bbf70cc9a56b19eb7faf60bdf76bc99d.jpg",
      "name": "Avengers: Endgame",
      "year": 2019,
      "duration": "3h 1m",
      "age_rating": "PG-13",
      "rating": 8.4,
      "user_ratings_count": 1500000
    },
    {
      "image": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "name": "Parasite",
      "year": 2019,
      "duration": "2h 12m",
      "age_rating": "R",
      "rating": 8.5,
      "user_ratings_count": 900000
    }
]

var sum = '';

movie.forEach(function(movieItem) {
    sum += `
    <div class="movie-card">
        <img src="${movieItem.image}" alt="${movieItem.name}">
        <h2>${movieItem.name} (${movieItem.year})</h2>
        <p>Duration: ${movieItem.duration}</p>
        <p>Age Rating: ${movieItem.age_rating}</p>
        <p class="rating">${movieItem.rating}</p>
        <p class="ratings-count">${movieItem.user_ratings_count.toLocaleString()} ratings</p>
    </div>
    `;
});

document.querySelector('.container').innerHTML = sum;