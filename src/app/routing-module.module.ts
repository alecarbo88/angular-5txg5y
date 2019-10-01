import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {UtentiListComponent} from './users/utenti-list/utenti-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './_services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UtentiListComponent,
    canActivate: [AuthGuardService],
  }, {
    path: 'users/:id/edit',
    component: UserDetailComponent,
    canActivate: [AuthGuardService],
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }) // <-- debugging purposes only
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ],
  declarations: []
})
export class AppRoutingModuleModule { }
