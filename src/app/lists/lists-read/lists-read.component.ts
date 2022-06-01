import { ListsService } from '../../services/lists.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-read',
  templateUrl: './lists-read.component.html',
  styleUrls: ['./lists-read.component.css']
})

export class ListsReadComponent {
  loading = true;
  displayedColumns = ['id', 'title'];
  lists : any;
  
  constructor(private listsService: ListsService) { }

  ngOnInit(): void {
    this.loading = true;

    try{
      this.listsService.getLists().subscribe((lists) => {
        this.loading = false;
        this.lists = lists;
        console.log(lists);
        return this.lists;
      });
    }
    catch (exception){
      this.loading = false;
    }
  }
}