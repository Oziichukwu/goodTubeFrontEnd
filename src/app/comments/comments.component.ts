import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { CommentService } from '../comment/comment.service';
import { UserService } from '../user/user.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import { CommentDto } from '../comment-dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  videoId: string = '';
  commentsForm: FormGroup;
  commentDto:CommentDto[] = [];
  commentsSubscription: Subscription = new Subscription;
  postCommentSubscription: Subscription = new Subscription;
  showCommentSection: boolean = false;
  constructor(private userService: UserService,
              private commentService: CommentService,
              private matSnackBar: MatSnackBar) {
    this.commentsForm= new FormGroup({
      comment: new FormControl('comment')
    });
  this.getCommentsSubscription();

  }

  private getCommentsSubscription() {
   this.getComments();
  }

  ngOnInit(): void {
    this.getComments();
  }

  showCommentButton() {
    this.showCommentSection = true;
  }

  postComment(){
    const comment = this.commentsForm.get('comment')?.value;
    const commentDto = {
      "commentText": comment,
      "authorId":this.userService.getUserId()
    }

    this.commentService.postComment(commentDto, this.videoId).subscribe( () =>{
      this.matSnackBar.open("Comment Added Successfully", "OK");

      this.commentsForm.get('comment')?.reset();
      this.getComments();
    })
  }

  getComments(){
    this.commentService.getAllComments(this.videoId)
    .subscribe(data =>{
      this.commentDto = data;
    })
  }

}
