import { FormControl} from '@angular/forms';

export class AddressValidators {
 
  static emailInvalid(control:FormControl) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegEx.test(control.value))
            return {emailInvalid:true};

        return null;
    }

      static phoneNumberInvalid(control:FormControl) {
        var phoneRegEx =  /^(([\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}))$/;
        if (!phoneRegEx.test(control.value))
            return {phoneNumberInvalid:true};

        return null;
    }

      static zipcodeInvalid(control:FormControl) {
        var zipcodeRegEx = /^\d{5}(?:[-\s]\d{4})?$/;
        if (!zipcodeRegEx.test(control.value))
            return {zipcodeInvalid:true};

        return null;
    }
}