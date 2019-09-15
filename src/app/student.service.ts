import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'https://desolate-cove-18577.herokuapp.com/student';

  constructor(private http: HttpClient) { }

  getStudents() {
     return this.http.get(this.url);
  }


  registerStudent(student:AnimationPlaybackEvent) {
    return this.http.post(this.url, student).toPromise();
  }

  deleteStudent(id) {
     return this.http.delete(this.url + id).toPromise();
  }

}
