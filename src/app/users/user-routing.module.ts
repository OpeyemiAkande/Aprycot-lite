import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AddUserComponent } from "./add-user/add-user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
    { path: 'add-user', component: AddUserComponent, pathMatch: 'full' },
    { path: 'user-list', component: UserListComponent, pathMatch: 'full' },
    { path: 'user-profile', component: UserProfileComponent, pathMatch: 'full' },
]

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }