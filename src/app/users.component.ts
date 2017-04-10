import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service'
import {User, UserDto} from './user';

@Component({
    selector: 'users',
    templateUrl:'./users.component.html',
    styleUrls:['./users.component.css']
})

export class UsersComponent implements OnInit{
    users: UserDto[] = [];
    constructor (private _userService:UserService) {}
    isLoading = false;

    ngOnInit() {
       this.isLoading = true;
        this._userService.getUsers()
        .subscribe(x=>{
            x.forEach(user=>{
                this.users.push({name:user.name, email:user.email});
            })
        });
        console.log(this.users);
        this.isLoading = false;
    }

}
