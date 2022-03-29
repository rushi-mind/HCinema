'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


    let movies = [
      {
          "_id": 1,
          "id": "tt0111161",
          "title": "The Shawshank Redemption",
          "fullTitle": "The Shawshank Redemption (1994)",
          "year": 1994,
          "image": "https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
          "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
          "imDbRating": 9.2,
          "imDbRatingCount": 2549334,
          "releaseStatus": true,
          "trailer": "https://www.youtube.com/watch?v=NmzuHjWmXOc",
          "dimension": true
      },
      {
          "_id": 2,
          "id": "tt0068646",
          "title": "The Godfather",
          "fullTitle": "he Godfather (1972)",
          "year": 1972,
          "image": "https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
          "crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
          "imDbRating": 9.1,
          "imDbRatingCount": 1753452,
          "releaseStatus": true,
          "trailer": "https://www.youtube.com/watch?v=UaVTIH8mujA",
          "dimension": true
      },
      {
          "_id": 3,
          "id": "tt0071562",
          "title": "The Godfather: Part II",
          "fullTitle": "The Godfather: Part II (1974)",
          "year": 1974,
          "image": "https://imdb-api.com/images/original/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg",
          "crew": "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
          "imDbRating": 9,
          "imDbRatingCount": 1215962,
          "releaseStatus": true,
          "trailer": "https://www.youtube.com/watch?v=9O1Iy9od7-A",
          "dimension": true
      },
      {
          "_id": 4,
          "id": "tt0468569",
          "title": "The Dark Knight",
          "fullTitle": "The Dark Knight (2008)",
          "year": 2008,
          "image": "https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg",
          "crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
          "imDbRating": 9,
          "imDbRatingCount": 2499805,
          "releaseStatus": true,
          "trailer": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
          "dimension": true
      },
      {
          "_id": 5,
          "id": "tt0050083",
          "title": "12 Angry Men",
          "fullTitle": "12 Angry Men (1957)",
          "year": 1957,
          "image": "https://imdb-api.com/images/original/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6716_AL_.jpg",
          "crew": "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
          "imDbRating": 8.9,
          "imDbRatingCount": 753385,
          "releaseStatus": true,
          "trailer": "https://www.youtube.com/watch?v=_13J_9B5jEk",
          "dimension": true
      },
      {
          "_id": 8,
          "id": "tt0108052",
          "title": "Schindler's List",
          "fullTitle": "Schindler's List (1993)",
          "year": 1993,
          "image": "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg",
          "crew": "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
          "imDbRating": 8.9,
          "imDbRatingCount": 1301094,
          "releaseStatus": true,
          "trailer": "https://www.youtube.com/watch?v=gG22XNhtnoY",
          "dimension": true
      }
    ];

    await queryInterface.bulkInsert('movies', movies);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movies', null, {});
  }
};
