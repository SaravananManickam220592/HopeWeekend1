import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name : 'capitalize'
})
export class CapitalizePipe implements PipeTransform{

    transform(value:string,noOfLetters:number=1):string{
        var finalValue = '';
        finalValue = value.substr(0,noOfLetters).toUpperCase()+value.substr(noOfLetters);
        return finalValue;
    }
}