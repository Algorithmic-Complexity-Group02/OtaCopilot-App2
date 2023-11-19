import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Anime } from '../models/anime';

@Component({
  selector: 'app-anime-dialog',
  templateUrl: './anime-dialog.component.html',
  styleUrls: ['./anime-dialog.component.css'],
})
export class AnimeDialogComponent {
  @Output() recommendationsClick = new EventEmitter<void>();

  anime: Anime;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { anime: Anime },
    private dialogRef: MatDialogRef<AnimeDialogComponent>
  ) {
    this.anime = data.anime;
  }

  onRecommendationsClick() {
    this.recommendationsClick.emit();
    this.dialogRef.close();
  }
}
