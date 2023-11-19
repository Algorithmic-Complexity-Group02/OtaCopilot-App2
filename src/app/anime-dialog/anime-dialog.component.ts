import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Anime } from '../models/anime';

@Component({
  selector: 'app-anime-dialog',
  templateUrl: './anime-dialog.component.html',
  styleUrls: ['./anime-dialog.component.css'],
})
export class AnimeDialogComponent {

  anime: Anime; 

  constructor(@Inject(MAT_DIALOG_DATA) public data: { anime: Anime }) {
    this.anime = data.anime; 
  }

}
