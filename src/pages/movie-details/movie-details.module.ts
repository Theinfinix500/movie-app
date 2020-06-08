import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MovieDetailsPage } from "./movie-details";

@NgModule({
  declarations: [MovieDetailsPage],
  imports: [IonicPageModule.forChild(MovieDetailsPage)],
  exports: [MovieDetailsPage]
})
export class MovieDetailsPageModule {}