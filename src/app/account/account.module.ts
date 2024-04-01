import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ConfirmMailComponent } from "./confirm-mail/confirm-mail.component";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SharedModule } from "../shared/shared.module";
import { AccountRoutingModule } from "./account-routing.module";


@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        RecoverPasswordComponent,
        ConfirmMailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AccountRoutingModule
    ],
})
export class AccountModule { }