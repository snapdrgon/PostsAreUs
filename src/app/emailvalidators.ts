import { FormControl} from '@angular/forms';

export class EmailValidators {
 
  static emailInvalid(control:FormControl) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegEx.test(control.value))
            return {emailInvalid:true};

        return null;
    }
}