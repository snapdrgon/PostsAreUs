import {Component, OnInit} from '@angular/core';
import {Post} from './post';
import {User} from './user';
import {PostComment} from './postcomment';
import {PostService} from './post.service';
import {UserService} from './user.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    selector: 'posts',
    templateUrl:'./posts.component.html',
    styleUrls:['./posts.component.css']
})

export class PostsComponent implements OnInit {
    posts: Post[] = [];
    users: User[] = [];
    filterId: number = -1;
    postComments:PostComment[] = [];
    isLoading = false;
    showPanel = false;
    showSpinner = false;
    title:string;
    body:string;

    constructor(private _postService:PostService, private _userService:UserService) {}

    ngOnInit() {
        this.isLoading = true;
        var observable = this._postService.getUsers()
        .subscribe( x => x.forEach(post=>{
            this.posts.push(post);
        }))
        //console.log(this.posts);
        //first add the select verbiage
        var selectStuff = new User();
        selectStuff.id = -1;
        selectStuff.name = 'Select user...'
        this.users.push(selectStuff);
        //now grab all the users
        var userObservable = this._userService.getUsers()
        .subscribe(x=>x.forEach(user=>{
            this.users.push(user);
        }))
        this.isLoading = false;
    }

    onClick(id:number, userId:number) {
         console.log('OnClick:' + id);
        this.postComments = []; //clear the array on entry
        this.posts.forEach(post=>{
            if (post.id===id && post.userId===userId) {
                this.title = post.title;
                this.body =  post.body;
                //grab related comments
                this.showSpinner = true;
                var observable = this._postService.getComment(post.id)
                .subscribe(x=> x.forEach(comment => {          
                    this.postComments.push(comment);
                }));
                this.showSpinner = false;
            }
        })
        this.showPanel = true;
    };

    onChange(id:string) {
        this.showPanel = false; //hide panel when swticthing to another user
       this.filterId = Number(id);
    }
}
