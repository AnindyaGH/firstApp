import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular';
  courseChoice = 0;
  courses : any[] = [
    { duration:'10 hours' , name:'Typescript'},
    { duration:'20 hours' , name:'Angular'},
    { duration:'13 hours' , name:'Node JS'}
  ]
  changeTitle(){
    if(this.title=='My First Angular')
      this.title='This is my first angular';
    else{
      this.title='My First Angular';
    }
  }

  selectedCourse(){
    if(this.courseChoice > 3){
      this.courseChoice=0;
    }
    this.courseChoice++;
  }
}
