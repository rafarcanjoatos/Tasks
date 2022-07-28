import { ListsService } from '../../services/lists.service';
import { TasksService } from '../../services/tasks.service';
import { CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

        // Afilliate Tasks in Lists
        try{    
          for (let i in this.lists){
            for (let idList of this.lists){             
              for (let idTask of this.tasks){
                //console.log("---------- Entrou no For Tasks");
                //console.log(idList.id);
                //console.log(idTask.listId);

                if(idList.id == idTask.listId){
                  //console.log("--------------- Entrou no if");
                  //console.log(idTask.title);
                  //console.log(idList.title);
                                    
                  //this.tasks[i].push(idTask);
                  //console.log(idList.id);
                  //console.log(this.tasks[i]);
                  //console.log("4 - Afiliou");
                }

              }
            }
          }
        }
        catch(exception){
          console.log("Erro ao afiliar Tarefas");
        }  

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
      
      try{
        console.log("updating listas", event.currentIndex);
        console.log("lista", this.lists[event.currentIndex]);
        console.log("id", this.lists.title);

        //this.lists.id = event.currentIndex;
        console.log(this.lists);
        
          this.listsService.update(this.lists).subscribe((lists) => {
            this.lists = lists;
            return this.lists;
          });
        }
        catch (exception){
            console.log("Erro ao update Listas");
        }

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