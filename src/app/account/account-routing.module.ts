import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ConfirmMailComponent } from "./confirm-mail/confirm-mail.component";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
    { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
    { path: 'confirm-mail', component: ConfirmMailComponent, pathMatch: 'full' },
    { path: 'recover-password', component: RecoverPasswordComponent, pathMatch: 'full' },
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
export class AccountRoutingModule { }