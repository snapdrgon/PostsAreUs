export class User {  
     id : number ;
     name : string ;
     username : string ;
     email : string ;
     address = new Address();
     phone : string ;
     website : string ;
     company : {
       name : string ;
       catchPhrase : string ;
       bs : string
    }
  }

export class Address {
    street : string ;
       suite : string ;
       city : string ;
       zipcode : string ;
       geo : {
         lat : string ;
         lng : string;
        }
}

  export class UserDto {
      name:string;
      email:string;
  }