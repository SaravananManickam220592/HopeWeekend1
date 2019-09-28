import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector : 'app-grocery',
    templateUrl :  './grocery.component.html',
    styleUrls : ['./grocery.component.css']
})
export class GroceryComponent {

    todayOfferProduct = 'sugar';
    price = 890000;
    imageUrl = 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/3562a.jpg';
    btnStatus = true;
    productoffer = false;
    fontColor = 'blue';
    items: any[] = [];
    today = new Date();
    interest = 0.15;

    grocery = [{
        id: 1 ,
        name : 'dhal'
    },{
        id: 2 ,
        name : 'fruits'
    },{
        id: 3 ,
        name : 'vegetables'
    },{
        id: 4 ,
        name : 'dairy'
    }]

    @ViewChild('item') viewitem:ElementRef;

    item = 'sugar';

    getOfferProduct() {
        return 'Soap';
    }


    itemEntered(itemEvent) {
        if (itemEvent.keyCode === 13) {
            const value = itemEvent.target.value;
            this.items.push(value);
            itemEvent.target.value = '';
            console.log(this.items);
        }
    }

    addItem() {
        const value = this.viewitem.nativeElement.value;
        this.items.push(value);
        this.viewitem.nativeElement.value = '';
        console.log(this.items);
    }

}
