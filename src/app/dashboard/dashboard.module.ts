import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { SharedModule } from "../shared/shared.module";

export const routes: Routes = [
    { path: '', component: UserComponent, pathMatch: 'full' },
    { path: 'user', component: UserComponent, pathMatch: 'full' },
    { path: 'admin', component: AdminComponent, pathMatch: 'full' },
    { path: 'restaurant', component: RestaurantComponent, pathMatch: 'full' },
];

@NgModule({
    declarations: [
        UserComponent,
        AdminComponent,
        RestaurantComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],

})
export class DashboardModule { }