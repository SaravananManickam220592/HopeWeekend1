import { PanDirective } from './pan.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { GroceryComponent } from './grocery/grocery.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { DollarPipe } from './dollar.pipe';
import { LikesComponent } from './likes/likes.component';
import { CardComponent } from './card/card.component';
import { DirectivesComponent } from './directives/directives.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from './register/register.component';
import { CrudComponent } from './crud/crud.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';


@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    FruitsComponent,
    CapitalizePipe,
    DollarPipe,
    LikesComponent,
    CardComponent,
    DirectivesComponent,
    PanDirective,
    StudentComponent,
    RegisterComponent,
    CrudComponent,
    NavbarComponent,
    HomeComponent,
    GrocerylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : '',
      component : HomeComponent
      },
      {
        path :'home',
        component : HomeComponent
    },{
      path : 'grocery',
      component :GroceryComponent
    },{
      path :'crud',
      component : CrudComponent
    },
  {
    path : 'student',
    component :StudentComponent
  },{
    path : 'grocery/grocerylist',
    component : GrocerylistComponent
  }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
