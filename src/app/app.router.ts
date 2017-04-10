import {Router, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {UserNewComponent} from './user-new.component';
import {PostsComponent} from './posts.component';
import {UnsavedDataGuard} from './unsaved-data.service';

export const routing = RouterModule.forRoot([
    {path:'', component: HomeComponent},
    {path:'users', component: UsersComponent},
    {path:'users/new', 
    component: UserNewComponent,
    canDeactivate:[UnsavedDataGuard]},
    {path:'posts', component: PostsComponent},    
    {path:'**', component: HomeComponent},    
]);
