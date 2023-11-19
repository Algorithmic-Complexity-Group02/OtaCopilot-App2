import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime';


@Component({
  selector: 'app-anime-recommendations',
  templateUrl: './anime-recommendations.component.html',
  styleUrls: ['./anime-recommendations.component.css']
})
export class AnimeRecommendationsComponent implements OnInit {

  recommendedAnimes: Anime[] = [];

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const animeTitle = params['animeTitle'];
      this.loadRecommendations(animeTitle);
    });
  }

  loadRecommendations(animeTitle: string) {
    this.animeService.getRecommendations(animeTitle).subscribe((data: any) => {
      this.recommendedAnimes = data.recommended_animes;
    });
  }
}
