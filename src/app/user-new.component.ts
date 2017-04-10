import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import {AddressValidators} from './addressvalidators';
import {Router} from '@angular/router';

@Component({
    selector: 'user-new',
    templateUrl:'./user-new.component.html',
    styleUrls:['./user-new.component.css']
})


export class UserNewComponent {
    userAddForm:FormGroup;
    minLength = 5;
    constructor(fb:FormBuilder, private _router:Router) {
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

   
}
