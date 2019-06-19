import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private nextPageToken = '';

  apiKey = 'YOUR YOUTUBE API KEY';

  constructor(private httpClient: HttpClient) { }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;

    const params = new HttpParams().set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', 'UU8butISFwT-Wl7EV0hUK0BQ')
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken);
      

    // if (this.nextPageToken !== '') {
    //   params.set('pageToken', this.nextPageToken);
    // }


    return this.httpClient.get(url, { params })
      .pipe(map((data: any) => {
        console.log(data);
        this.nextPageToken = data.nextPageToken;

        // We will build a videos array with the snippets
        const videos: any[] = [];
        for (const video of data.items) {
          const snippet = video.snippet;
          videos.push(snippet);
        }
        // console.log(videos);
        return videos;
      }));


  }
}
