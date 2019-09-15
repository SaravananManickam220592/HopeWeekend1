import { StudentService } from './../student.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  addStatus = false;
  deleteStatus = false;
  error = false;

  students: [] = [];

  constructor(private studentService:StudentService) {

  }

  ngOnInit() {

    this.getStudents();

  }

  getStudents() {
    this.studentService.getStudents().subscribe((res) => {
      this.students = res['students'];
    }, (err:Response) => {
      if(err.status == 500){

      }else if(err.status == 404){

      }
      this.error = true;
      var me=this;
      setTimeout(() => {
        me.error = false;
      }, 3000);
    }, () => {
        console.log('Get Student COmpleted !!!')
    })
  }


  registerStudent(studentForm: NgForm) {
    var student = studentForm.value;

    this.studentService.registerStudent(student).then(() => {
      this.addStatus = true;
      studentForm.resetForm();
      var me = this;
      this.getStudents();
      setTimeout(() => {
        me.addStatus = false;
      }, 3000);
    }).catch(() => {

    }).finally(() => {

    });

  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id).then((res) => {
      this.deleteStatus = true;
      this.getStudents();
      var me = this;
      setTimeout(() => {
        me.deleteStatus = false;
      }, 3000)

    }).catch().finally();
  }


}
