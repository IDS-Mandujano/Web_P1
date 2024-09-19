import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DashboardPostsComponent } from './dashboard-posts/dashboard-posts.component';



@NgModule({
  declarations: [
    CardComponent,
    DashboardPostsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PostsModule { }
