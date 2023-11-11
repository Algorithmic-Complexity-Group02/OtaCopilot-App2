import { Component, Input } from '@angular/core';
import { Anime } from '../models/anime';


@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent {
  @Input() anime!: Anime;
}
