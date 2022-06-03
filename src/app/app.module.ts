import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ListsComponent } from './lists/lists.component';
import { ResourcesComponent } from './resources/resources.component';
import { ListsReadComponent } from './lists/lists-read/lists-read.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksReadComponent } from './tasks/tasks-read/tasks-read.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListsComponent,
    ResourcesComponent,
    ListsReadComponent,
    TasksComponent,
    TasksReadComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [
    ListsReadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
