import { NgModule } from "@angular/core";
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@NgModule({
    exports: [
        CardModule,
        InputTextModule,
        ButtonModule,
        HttpClientModule,
        ToastModule
    ]
})
export class PrimeModule { }