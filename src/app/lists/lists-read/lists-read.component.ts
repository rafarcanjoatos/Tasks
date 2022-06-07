import { ListsService } from '../../services/lists.service';
import { TasksService } from '../../services/tasks.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-read',
  templateUrl: './lists-read.component.html',
  styleUrls: ['./lists-read.component.css']
})

export class ListsReadComponent {
  lists : any;
  listsColumns = ['id','title'];
  tasks : any;
  tasksColumns = ['id','listId','title'];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor(private listsService: ListsService, private tasksService: TasksService) { }
  
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
    
    try{
      this.tasksService.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
        console.log(tasks);
        return this.tasks;
      });
    }
    catch (exception){
        console.log("Erro ao importar Tarefas");
    }

    try{
      for (let i in this.lists){
        if(this.tasks.listId[i] == this.lists.id[i]){
          this.lists.id[i] = this.tasks[i];
        }
      }

    }
    catch(exception){
      console.log("Erro ao afiliar Tarefas");
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