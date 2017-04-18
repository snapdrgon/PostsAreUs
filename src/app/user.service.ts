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

    updateUser(user:User) {
        var url = this._url + user.id;
        var _observable = this._http.put(url, JSON.stringify(user))
        .map(res=>res.json());

        _observable.subscribe(x=>console.log(x));
    }

    addUser(user:User) {
        var url = this._url
        var _observable = this._http.post(url, JSON.stringify(user))
        .map(res=>res.json());

        _observable.subscribe(x=>console.log(x));
    }

    deleteUser(id:number) {
         var url = this._url + id;
        var _observable = this._http.delete(url)
        .map(res=>res.json());

        _observable.subscribe(x=>console.log(x));
    }

} 