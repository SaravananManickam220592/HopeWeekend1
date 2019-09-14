import { PanDirective } from './pan.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { GroceryComponent } from './grocery/grocery.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { DollarPipe } from './dollar.pipe';
import { LikesComponent } from './likes/likes.component';
import { CardComponent } from './card/card.component';
import { DirectivesComponent } from './directives/directives.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from './register/register.component';


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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
