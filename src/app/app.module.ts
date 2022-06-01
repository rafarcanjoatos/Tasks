import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ListsComponent } from './lists/lists.component';
import { ResourcesComponent } from './resources/resources.component';
import { ListsReadComponent } from './lists/lists-read/lists-read.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListsComponent,
    ResourcesComponent,
    ListsReadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ListsReadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
