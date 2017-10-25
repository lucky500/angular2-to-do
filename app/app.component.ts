import { Component } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do App {{month}}/{{day}}/{{year}}</h1>
    <h4>{{currentFocus}}</h4>
    <task-list></task-list>
    <div *ngIf="selectedTask">
      <h3>{{selectedTask.description}}</h3>
      <p>Task Complete? {{selectedTask.done}}</p>
      <h3>Edit Task</h3>
      <label>Enter Task Desciption:</label>
      <input [(ngModel)]="selectedTask.description">
      <label>Enter Task Priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
      <input type="radio"[(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3"> 3 (High Priority)
      <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = "Learn Angular 2";
  currentTime = new Date();
  month: number  = this.currentTime.getMonth() + 1;
  day:   number  = this.currentTime.getDate();
  year:  number  = this.currentTime.getFullYear();
  selectedTask = null;

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }

  finishedEditing(){
    this.selectedTask = null;
  }
}
