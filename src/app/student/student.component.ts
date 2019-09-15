import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

  emailControl(email) {
    console.log(email);
  }

  registerStudent(studentForm: NgForm) {
    console.log(studentForm.value);
  }

}
