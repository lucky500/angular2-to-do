import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do App {{month}}/{{day}}/{{year}}</h1>
    <h4>{{currentFocus}}</h4>
    <ul>
      <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent { 
  currentFocus: string = "Learn Angular 2";
  currentTime = new Date();
  month: number  = this.currentTime.getMonth() + 1;
  day:   number  = this.currentTime.getDate();
  year:  number  = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Do Angular2 Tour of Heros Example"),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub') 
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string){}
}