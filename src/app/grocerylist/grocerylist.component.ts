import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {

  fruits  = ['apple','orange','mango'];
  dhal  = ['moong','chana','rajma'];
  dairy  = ['milk','curd','panner'];
  vegetables  = ['cabbage','cauliflower','carrot'];

  grocList= [];

  constructor(private route:ActivatedRoute) { 
      this.route.queryParamMap.subscribe((params)=>{
          var category  = params.get('name');
          var id = params.get('id');
          console.log(category);
          console.log(id);
         if( category == 'fruits')
         this.grocList = this.fruits;
         else if(category == 'dhal')
         this.grocList = this.dhal;
         else if(category == 'dairy')
         this.grocList = this.dairy;
         else if(category == 'vegetables')
         this.grocList = this.vegetables;
      })
  }

  ngOnInit() {
  }

}
