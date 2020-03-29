import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-movie-details",
  templateUrl: "movie-details.html"
})
export class MovieDetailsPage implements OnInit {
  movie: Movie;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.fetchMovie(this.navParams.get("movieId")).subscribe();
  }

  fetchMovie(movieId: string): Observable<Movie> {
    return this.http
      .get<Movie>(`http://www.omdbapi.com/?i=${movieId}&apikey=607538a9`)
      .pipe(map(data => (this.movie = data)));
  }
}

interface Rating {
  Source: string;
  Value: string;
}

interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
