import { Component } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do App {{month}}/{{day}}/{{year}}</h1>
    <h4>{{currentFocus}}</h4>
    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
    <hr>
    <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()">
    </edit-task>
    <new-task (newTaskSender)="addTask($event)"></new-task>
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

  masterTaskList: Task[] = [
    new Task("Do Angular2 Tour of Heros Example", 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }

  finishedEditing(){
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task){
    this.masterTaskList.push(newTaskFromChild);
  }

}
