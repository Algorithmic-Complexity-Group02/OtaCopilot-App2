import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anime-collection',
  templateUrl: './anime-collection.component.html',
  styleUrls: ['./anime-collection.component.css'],
})
export class AnimeCollectionComponent implements OnInit {
  animes: Anime[] = [];
  searchForm: FormGroup;

  constructor(private animeService: AnimeService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: '',
    });
  }

  ngOnInit() {
    this.loadAllAnimes();
  }

  loadAllAnimes() {
    this.animeService.getAllAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  searchAnimes() {
    const searchTermControl = this.searchForm.get('searchTerm');
  
    if (searchTermControl) {
      const searchTerm = searchTermControl.value;
  
      if (searchTerm.trim() !== '') {
        console.log('Searching animes by name:', searchTerm);
        this.animeService.searchAnimesByName(searchTerm).subscribe(
          (animes) => {
            this.animes = animes;
          },
          (error) => {
            console.error('Error searching animes:', error);
          }
        );
      } else {
        console.log('Search term is empty, loading all animes');
        this.loadAllAnimes();
      }
    } else {
      console.error('searchTermControl is null');
    }
  }
}
