import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentsForm: FormGroup;

  constructor(private userService: UserService) {
    this.commentsForm= new FormGroup({
      comment: new FormControl('comment')
    })
   }

  ngOnInit(): void {
  }

  postComment(){
    const comment = this.commentsForm.get('comment')?.value;
    const commentDto = {
      "commentText": comment,
      "authorId":this.userService.getUserId()
    }
  }


}
