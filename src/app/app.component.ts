import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  post:any = { likesCount :89 , isLiked : false};

  likeChanged(likeData){
    console.log(likeData);
  }
}
