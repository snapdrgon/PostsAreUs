import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {
    private _url = "https://jsonplaceholder.typicode.com/users/";

    constructor(private _http: Http){}

    getUsers() : Observable<User[]> {
        var userObservable = this._http.get(this._url)
        .map(resp=>resp.json());

        // userObservable.subscribe(x=>console.log(x));
       
        return userObservable;
    }

    getUser(id:number) : Observable<User> {
        var userObservable = this._http.get(this._url)
        .flatMap((resp)=>resp.json())
        .filter((user:User)=>user.id===id);
     
        return userObservable;
    }

} 