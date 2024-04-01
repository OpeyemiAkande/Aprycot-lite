import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { CustomerReviewComponent } from "./customer-review/customer-review.component";
import { DishDetailComponent } from "./dish-detail/dish-detail.component";
import { MenuComponent } from "./menu/menu.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";

export const routes: Routes = [
    { path: 'add-to-cart', component: AddToCartComponent, pathMatch: 'full' },
    { path: 'customer-review', component: CustomerReviewComponent, pathMatch: 'full' },
    { path: 'dish-detail', component: DishDetailComponent, pathMatch: 'full' },
    { path: 'menu', component: MenuComponent, pathMatch: 'full' },
    { path: 'order-details', component: OrderDetailsComponent, pathMatch: 'full' },
    { path: 'order-history', component: OrderHistoryComponent, pathMatch: 'full' },
    { path: 'restaurant-detail', component: RestaurantDetailComponent, pathMatch: 'full' },
];

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SpecialPagesRoutingModule { }