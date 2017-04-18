import {Component, OnInit} from '@angular/core';
import {Post} from './post';
import {PostComment} from './postcomment';
import {PostService} from './post.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    selector: 'posts',
    templateUrl:'./posts.component.html',
    styleUrls:['./posts.component.css']
})

export class PostsComponent implements OnInit {
    posts: Post[] = [];
    postComments:PostComment[] = [];
    isLoading = false;
    showPanel = false;
    showSpinner = false;
    title:string;
    body:string;

    constructor(private _postService:PostService) {}

    ngOnInit() {
        this.isLoading = true;
        var observable = this._postService.getUsers()
        .subscribe( x => x.forEach(post=>{
            this.posts.push(post);
        }))
        //console.log(this.posts);
        this.isLoading = false;
    }

    onClick(index:number) {
        // console.log(index);
         this.postComments = []; //clear the array on entry
        this.title = this.posts[index].title;
        this.body = this.posts[index].body;
        this.showSpinner = true;
        var observable = this._postService.getComment(index+1)
        .subscribe(x=> x.forEach(comment => {          
            this.postComments.push(comment);
        }));
        this.showSpinner = false;


        console.log(this.postComments);

        this.showPanel = true;
    };
}
