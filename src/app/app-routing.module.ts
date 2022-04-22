import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadVideosComponent} from "./upload-videos/upload-videos.component";
import {SaveVideoDetailsComponent} from "./save-video-details/save-video-details.component";
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent} from './subscription/subscription.component';
import { HistoryComponent } from './history/history.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { FeaturedComponent } from './featured/featured.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
      {
        path: 'featured', component: FeaturedComponent,
      },
      {
        path: 'subscription', component: SubscriptionComponent,
      },
      {
        path: 'history', component: HistoryComponent,
      },
      {
        path: 'liked-videos', component: LikedVideosComponent,
      },
    ]
  },

  {
    path: 'upload-videos', component: UploadVideosComponent,
  },
  {
    path: 'save-video-details/:videoId', component: SaveVideoDetailsComponent,
  },
  {
    path:'video-detail/:videoId', component: VideoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
