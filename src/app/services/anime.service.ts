import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data-service.service";
import {catchError, Observable, retry} from "rxjs";
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService extends DataService<Anime>{
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
    return this.http.get<Anime[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.basePath);
  }
}
