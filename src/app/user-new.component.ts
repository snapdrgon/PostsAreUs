import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
    selector: 'user-new',
    templateUrl:'./user-new.component.html',
    styleUrls:['./user-new.component.css']
})

export class UserNewComponent {
    userAddForm:FormGroup;

    constructor(fb:FormBuilder) {
        this.userAddForm = fb.group({
            userName:[],
            email:[],
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
