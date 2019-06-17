import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youtubeUrl =  'https://www.googleapis.com/youtube/v3';
  apiKey = 'YOUR YOUTUBE API KEY';

  constructor(private httpClient: HttpClient) { }

  getVideos(){
    const url = `${this.youtubeUrl}/playlistItems`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.httpClient.get(url, { headers })
      .pipe( map((data: any) => console.log(data)));
  }

}