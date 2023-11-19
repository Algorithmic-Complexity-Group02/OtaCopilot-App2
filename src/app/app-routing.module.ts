import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeRecommendationsComponent } from './anime-recommendations/anime-recommendations.component';
import { AnimeCollectionComponent } from './anime-collection/anime-collection.component';

const routes: Routes = [
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
  { path: 'collection', component: AnimeCollectionComponent },
  { path: 'recommendations/:animeTitle', component: AnimeRecommendationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
