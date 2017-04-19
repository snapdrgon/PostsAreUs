import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service'
import {User} from './user';
import {SpinnerComponent} from './spinner.component';

@Component({
    selector: 'users',
    templateUrl:'./users.component.html',
    styleUrls:['./users.component.css']
})

export class UsersComponent implements OnInit{
    users: User[] = [];
    constructor (private _userService:UserService) {}
    isLoading = false;

    ngOnInit() {
       this.isLoading = true;
        this._userService.getUsers()
        .subscribe(x=>{
            x.forEach(user=>{
                this.users.push(user);
            })
        });
        console.log(this.users);
        this.isLoading = false;
    }

     deleteUser(id:number, user: string) {
        console.log(id);   
        if (confirm('Are you sure you want to delete user:' + user))  {
            this.users.splice(id-1,1); //remove row
            this._userService.deleteUser(id);
        }
    }

}
