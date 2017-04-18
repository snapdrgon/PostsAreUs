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
import {PostService} from './post.service';
import {UnsavedDataGuard} from './unsaved-data.service';
import {NotFoundComponent} from './not-found.component';
import {SpinnerComponent} from './spinner.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    UserNewComponent,
    NotFoundComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, UnsavedDataGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
