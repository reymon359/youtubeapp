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
      .subscribe(videos => {
        this.videos = videos;
        // console.log(this.videos);
      }

      );
  }

  ngOnInit() {
  }

  watchVideo(video: any){
    this.videoSelected = video;
    console.log(this.videoSelected);
    $('#exampleModalCenter').modal();
  }
  
  closeModal(){
    this.videoSelected = null;
    $('#exampleModalCenter').modal('hide');
  }

}
