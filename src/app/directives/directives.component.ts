import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  bookOffer:boolean = false;
  viewmode:string = 'xxx';
  offer1:boolean = true;
  offer2:boolean = true;
  color:string = 'red';
  bgColor:string = 'yellow';


  courses:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  loadCourses(){
    this.courses = [{
      name:'Angular',
      price : 9000
    },{
      name : 'nodejs',
      price : 8000
    },{
      name : 'spring boot',
      price: 7000
    },{
      name :'Machine Learnign',
      price : 23000
    }]
  }

}
