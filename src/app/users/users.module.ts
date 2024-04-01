import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
    declarations: [
        AddUserComponent,
        UserListComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule
    ]
})
export class UsersModule { }