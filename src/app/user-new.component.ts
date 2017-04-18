import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import {AddressValidators} from './addressvalidators';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';

@Component({
    selector: 'user-new',
    templateUrl:'./user-new.component.html',
    styleUrls:['./user-new.component.css']
})


export class UserNewComponent implements OnInit, OnDestroy{
    userAddForm:FormGroup;
    minLength = 5;
    title:string;
    submitCaption:string;
     id:number;
    subscription;

    user = new User();
   
    constructor(fb:FormBuilder, private _router:Router, 
    private _route:ActivatedRoute, private _userService: UserService ) {
        this.userAddForm = fb.group({
            userName:['' , Validators.compose([Validators.required, Validators.minLength(this.minLength)])],
            email:['', AddressValidators.emailInvalid],
            phone:['',AddressValidators.phoneNumberInvalid],
            street:['', Validators.required],
            suite:[],
            city:['', Validators.required],
            zipcode:['', AddressValidators.zipcodeInvalid]
        });

    }

    addUpdateUser() {
        console.log(this.userAddForm);

        this._router.navigate(['users']);
    }

    ngOnInit() {
        this.subscription = this._route.params.subscribe(param => {
            this.id = +param['id'];
        })
        this.title = isNaN(this.id) ? 'Add a User':'Edit a User';
        this.submitCaption = isNaN(this.id) ? 'Add User':'Update User';
        if (!isNaN(this.id)) {
            this._userService.getUser(this.id)
            .subscribe(x=>{this.user = x ,  
            response=>{
                if (response.status==404) {
                    this._router.navigate(['not-found']);
                }}
            })
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onUpdate() {
        console.log(this.user);

        if (!isNaN(this.id)) 
            this._userService.updateUser(this.user);
        else
            this._userService.addUser(this.user);
    }


   
}
