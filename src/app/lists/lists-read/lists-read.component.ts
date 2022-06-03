import { ListsService } from '../../services/lists.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Lists } from './../lists';
import { TasksReadComponent } from '../../tasks/tasks-read/tasks-read.component';
import { Tasks } from 'src/app/tasks/tasks';

@Component({
  selector: 'app-lists-read',
  templateUrl: './lists-read.component.html',
  styleUrls: ['./lists-read.component.css']
})

export class ListsReadComponent {
  lists : any;
  displayedColumns = ['id','title'];
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor(private listsService: ListsService) { }

  ngOnInit(): void {
    try{
      this.listsService.getLists().subscribe((lists) => {
        this.lists = lists;
        console.log(lists);
        return this.lists;
      });
    }
    catch (exception){
        console.log("Erro ao importar Listas");
    }
  }  
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}


