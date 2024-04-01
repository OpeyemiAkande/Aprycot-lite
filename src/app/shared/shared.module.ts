import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeModule } from './prime.module';
// import { }


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        PrimeModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        PrimeModule
    ],
    providers: [],
})
export class SharedModule { }
