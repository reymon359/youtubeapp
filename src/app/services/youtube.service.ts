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

    const params = new HttpParams().set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', 'UU8butISFwT-Wl7EV0hUK0BQ')
    .set('key', this.apiKey );

    return this.httpClient.get(url, { params })
      .pipe( map((data: any) => console.log(data)));
  }

}