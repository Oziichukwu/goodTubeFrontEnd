import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDto } from '../video-dto';
import {VideoService} from '../video/video.service'
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featuredVideos:Array<VideoDto> = [];

  constructor(private router:Router, private videoService:VideoService) {
    this.router.navigateByUrl('/featured')
   } 

    ngOnInit(): void {
      this.videoService.getAllVideos().subscribe(response => {
        this.featuredVideos = response;
      })
  }

}
