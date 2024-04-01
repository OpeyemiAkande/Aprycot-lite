import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { Error500Component } from './core/utilities/error-500/error-500.component';
import { Error404Component } from './core/utilities/error-404/error-404.component';
import { MaintainanceComponent } from './core/utilities/maintainance/maintainance.component';

const routes: Routes = [
  { path: '', component: SignInComponent, pathMatch: 'full' },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'special-pages', loadChildren: () => import('./special-pages/special-pages.module').then(m => m.SpecialPagesModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'server-error', component: Error500Component },
  { path: 'not-found', component: Error404Component },
  { path: 'maintainance', component: MaintainanceComponent },
  // { path: 'postreg/auth-verify-email/:id/:key', component: ValidateLinkComponent }
  //{ path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
