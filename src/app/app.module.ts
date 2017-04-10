import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HomeComponent} from './home.component';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './users.component';
import {UserNewComponent} from './user-new.component';
import {routing} from './app.router';
import {UserService} from './user.service';
import {UnsavedDataGuard} from './unsaved-data.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, UnsavedDataGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
