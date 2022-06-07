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
  tasks : any;
   
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor(private listsService: ListsService, private tasksService: TasksService) { }

  ngOnInit(): void {

    // Get Lists
    try{
      this.listsService.getLists().subscribe((lists) => {
        this.lists = lists;
        //console.log(lists);
        return this.lists;
      });
    }
    catch (exception){
        console.log("Erro ao importar Listas");
    }
    
    // Get Tasks
    try{
      this.tasksService.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
        //console.log(tasks);

        // // Afilliate Tasks in Lists
        // try{    
        //   for (let i in this.tasks){            
        //     console.log("----- Entrou no Contador");
        //     for (let idTask of this.tasks){
        //       console.log("---------- Entrou no For");
        //       //console.log(i);
        //       //console.log(idTask.listId);

        //       if(i == idTask.listId){
        //         console.log("--------------- Entrou no if");
        //         console.log(idTask.title);
        //         console.log(this.lists[i]);

        //         this.lists[i].concat(idTask);
        //         console.log(this.lists[i]);
        //         // console.log("4 - Afiliou");
        //       }

        //       }
        //   }
        // }
        // catch(exception){
        //   console.log("Erro ao afiliar Tarefas");
        // }  

        return this.tasks;
      });
    }
    catch (exception){
        console.log("Erro ao importar Tarefas");
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