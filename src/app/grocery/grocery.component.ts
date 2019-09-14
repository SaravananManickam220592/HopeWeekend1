import { Component } from '@angular/core';


@Component({
    selector : 'grocery',
    templateUrl :  './grocery.component.html',
    styleUrls : ['./grocery.component.css']
})
export class GroceryComponent{

    todayOfferProduct:string = 'sugar';
    price:number = 890000;
    imageUrl:string = 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/3562a.jpg';
    btnStatus:boolean = true;
    productoffer:boolean = false;
    fontColor:string='blue';
    items:any[]=[];
    today = new Date();
    interest = 0.15;

    item:string='sugar';

    getOfferProduct(){
        return 'Soap';
    }


    itemEntered(itemEvent){
        if(itemEvent.keyCode === 13){
            var value = itemEvent.target.value;
            this.items.push(value);
            itemEvent.target.value='';
            console.log(this.items);
        }
    }

    addItem(item){
        var value = item.value;
        this.items.push(value);
        item.value ='';
        console.log(this.items)
    }

}