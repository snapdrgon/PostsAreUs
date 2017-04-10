import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {UserNewComponent} from './user-new.component';


@Injectable()
export class UnsavedDataGuard implements CanDeactivate<UserNewComponent>{
    canDeactivate(component: UserNewComponent) {
        //  if (component.userAddForm.invalid && component.userAddForm.dirty) {
        //    bootbox.confirm("Are you sure you want to leave this page?", x=>{
        //         return x;
        //      })
        //  } 
        //  else
        //   return true; 
        if (component.userAddForm.invalid && component.userAddForm.dirty)
         return confirm('Are you sure you want to leave this page?'); 
       
         return true;
    }

}