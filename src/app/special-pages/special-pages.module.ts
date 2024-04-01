import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SpecialPagesRoutingModule } from './special-pages-routing.module';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { MenuComponent } from './menu/menu.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';



@NgModule({
    declarations: [
        AddToCartComponent,
        CustomerReviewComponent,
        DishDetailComponent,
        MenuComponent,
        OrderDetailsComponent,
        OrderHistoryComponent,
        RestaurantDetailComponent
    ],
    imports: [
        CommonModule,
        SpecialPagesRoutingModule,
        SharedModule
    ]
})
export class SpecialPagesModule { }