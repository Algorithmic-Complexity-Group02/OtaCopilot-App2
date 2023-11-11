import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime';

@Component({
  selector: 'app-anime-collection',
  templateUrl: './anime-collection.component.html',
  styleUrls: ['./anime-collection.component.css']
})
export class AnimeCollectionComponent {
  animes: Anime[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getAllAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }
}

