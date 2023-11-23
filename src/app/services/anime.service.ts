import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service.service';
import { catchError, Observable } from 'rxjs';
import { Anime } from '../models/anime';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimeService extends DataService<Anime> {
  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://127.0.0.1:8000/api/v1/animes';
  }
  
  getAnimeById(animeId: number): Observable<any> {
    const url = `${this.basePath}/${animeId}`;
    return this.http.get(url);
  }
  
  getRecommendations(animeTitle: string): Observable<Anime[]> {
    const url = `${this.basePath}/${animeTitle}`;
    return this.http.get<Anime[]>(url).pipe(catchError(this.handleError));
  }
  
  getAllAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.basePath);
  }
  
  searchAnimesByName(animeName: string): Observable<Anime[]> {
    const url = `http://127.0.0.1:8000/api/v1/search/animes?query=${animeName}`;
    return this.http.get<{ search_results: Anime[] }>(url).pipe(
      map((response: { search_results: Anime[] }) => response.search_results),
      catchError(this.handleError)
    );
  }
  
}
