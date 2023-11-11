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
    this.basePath = 'http://localhost:3000/';
  }
 
  getAnimeById(animeId: number): Observable<any> {
    const url = `${this.basePath}/${animeId}`;
    return this.http.get(url);
  }

}
