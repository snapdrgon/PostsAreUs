import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import {EmailValidators} from './emailvalidators';

@Component({
    selector: 'user-new',
    templateUrl:'./user-new.component.html',
    styleUrls:['./user-new.component.css']
})

export class UserNewComponent {
    userAddForm:FormGroup;
    minLength = 5;
    constructor(fb:FormBuilder) {
        this.userAddForm = fb.group({
            userName:['' , Validators.compose([Validators.required, Validators.minLength(this.minLength)])],
            email:['', EmailValidators.emailInvalid],
            phone:[],
            street:[],
            suite:[],
            city:[],
            zipcode:[]
        });
    }
    addUpdateUser() {
        console.log(this.userAddForm);
    }

}
