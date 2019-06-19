import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSelected: any;

  constructor(private youtubeService: YoutubeService) {
        this.youtubeService.getVideos()
      .subscribe(videos => this.videos = videos);

  }

  ngOnInit() {
  }

  loadMore() {
    this.youtubeService.getVideos()
      .subscribe(videos => this.videos.push.apply(this.videos, videos));
  }

  watchVideo(video: any) {
    this.videoSelected = video;
    $('#exampleModalCenter').modal();
  }

  closeModal() {
    this.videoSelected = null;
    $('#exampleModalCenter').modal('hide');
  }


}
