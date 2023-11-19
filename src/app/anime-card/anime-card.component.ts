import { Component, Input } from '@angular/core';
import { Anime } from '../models/anime';
import { MatDialog } from '@angular/material/dialog';
import { AnimeDialogComponent } from '../anime-dialog/anime-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css'],
})
export class AnimeCardComponent {
  @Input() anime!: Anime;

  constructor(public dialog: MatDialog,  private router: Router) {}

  openDialog(anime: Anime): void {
    const dialogRef = this.dialog.open(AnimeDialogComponent, {
      width: '85%',
      data: { anime: anime }
    });

    dialogRef.componentInstance.recommendationsClick.subscribe(() => {
      this.router.navigate(['/recommendations', anime.title]);
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'recommendations') {
        this.router.navigate(['/recommendations', anime.title]);
      }
    });

  }
}
