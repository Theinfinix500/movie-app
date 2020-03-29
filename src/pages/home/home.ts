import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { MovieDetailsPage } from "../movie-details/movie-details";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  search: Array<SearchedMovie>;

  constructor(public navCtrl: NavController, private http: HttpClient) {}

  ngOnInit() {
    this.initMovies();
  }

  initMovies() {
    this.search = [
      {
        Title: "Iron Man",
        Year: "2008",
        imdbID: "tt0371746",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
      },
      {
        Title: "Iron Man 3",
        Year: "2013",
        imdbID: "tt1300854",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
      },
      {
        Title: "Iron Man 2",
        Year: "2010",
        imdbID: "tt1228705",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
      },
      {
        Title: "The Iron Giant",
        Year: "1999",
        imdbID: "tt0129167",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjIxNDU2Njk0OV5BMl5BanBnXkFtZTgwODc3Njc3NjE@._V1_SX300.jpg"
      },
      {
        Title: "The Man in the Iron Mask",
        Year: "1998",
        imdbID: "tt0120744",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        Title: "Iron Fist",
        Year: "2017–2018",
        imdbID: "tt3322310",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg"
      },
      {
        Title: "The Iron Lady",
        Year: "2011",
        imdbID: "tt1007029",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg"
      },
      {
        Title: "Iron Sky",
        Year: "2012",
        imdbID: "tt1034314",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg"
      },
      {
        Title: "The Man with the Iron Fists",
        Year: "2012",
        imdbID: "tt1258972",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg"
      },
      {
        Title: "3-Iron",
        Year: "2004",
        imdbID: "tt0423866",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM1ODIwNzM5OV5BMl5BanBnXkFtZTcwNjk5MDkyMQ@@._V1_SX300.jpg"
      }
    ];
  }

  getMovie(ev: any) {
    console.log(ev);
    this.searchMovie(ev.target.value).subscribe();
  }

  navToMovieDetails(imdbID: string) {
    this.navCtrl.push(MovieDetailsPage, { movieId: imdbID });
  }

  searchMovie(searchTerm: string) {
    return this.http
      .get<Search>(`http://www.omdbapi.com/?s=${searchTerm}&apikey=607538a9`)
      .pipe(map(data => (this.search = data.Search)));
  }
}

export interface SearchedMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Search {
  Search: SearchedMovie[];
  totalResults: string;
  Response: string;
}
