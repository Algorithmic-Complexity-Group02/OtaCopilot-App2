import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeRecommendationsComponent } from './anime-recommendations/anime-recommendations.component';

const routes: Routes = [
  { path: 'recommendations/:animeTitle', component: AnimeRecommendationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
