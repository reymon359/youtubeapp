import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];

  constructor(private youtubeService: YoutubeService) {
    this.youtubeService.getVideos()
      .subscribe(videos => {
        this.videos = videos;
        console.log(this.videos);
      }

      );
  }

  ngOnInit() {
  }

}
