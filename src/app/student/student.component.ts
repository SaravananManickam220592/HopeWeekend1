import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emailControl(email){
    console.log(email);
  }

  registerStudent(studentForm:NgForm){
    console.log(studentForm.value);
  }

}
