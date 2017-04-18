import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {Injectable} from '@angular/core';
import {Post} from './post';
import {PostComment} from './postcomment';

@Injectable()
export class PostService {
private _url = "https://jsonplaceholder.typicode.com/posts/";

    constructor(private _http: Http){}

    getUsers() : Observable<Post[]> {
        var userObservable = this._http.get(this._url)
        .map(resp=>resp.json());

       // userObservable.subscribe(x=>console.log(x));     
        return userObservable;
    }

    //https://jsonplaceholder.typicode.com/posts/1/comments
      getComment(index:number) : Observable<PostComment[]> {
        var urlComment = this._url + index + '/comments';
        var userObservable = this._http.get(urlComment)
        .map(resp=>resp.json());
     //   console.log(userObservable);

       // userObservable.subscribe(x=>console.log(x));     
        return userObservable;
    }

}