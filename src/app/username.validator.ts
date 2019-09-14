import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidator{

    static usernameSpaceValidator(control:AbstractControl):ValidationErrors|null{
        var value =<string> control.value;
        if(value.indexOf(' ')>0 ){
            return { usernameShouldNotContainSpace : true };
        }
        return null;
    } 
    
    static usernameUniqueCheck(control:AbstractControl):Promise<ValidationErrors>|null{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                var username = control.value;
                if(username == 'saravanan')
                    resolve({ usernameNotUnique : true})
                else
                resolve(null);
            },4000);
        });
    }

}