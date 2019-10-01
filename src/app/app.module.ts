import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './_extras/lifecycle-hooks/lifecycle-hooks.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UtentiListComponent} from './users/utenti-list/utenti-list.component';
import {UserRowComponent} from './users/user-row/user-row.component';
import { UserDetailReactiveFormComponent } from './users/user-detail-reactive-form/user-detail-reactive-form.component';
import {UserSearchPipe} from './users/pipes/user-search-pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NavComponent} from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './_services/user.service';
import { PageNotFoundComponent } from './page-not-fund/page-not-found.component';
import {AppRoutingModuleModule} from './routing-module.module';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AuthService} from './_services/auth-service.service';
import {AppConfig} from './_services/app-config.service';

const routes: Routes = [
  {
    path: 'users',
    component: UtentiListComponent
  }, {
    path: 'users/:id/edit',
    component: UserDetailComponent
  }, {
      path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  }
];

export function initConfig(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    UtentiListComponent,
    LifecycleHooksComponent,
    UserRowComponent,
    UserDetailComponent,
    UserDetailReactiveFormComponent,
    NavComponent,
    PageNotFoundComponent,
    // Pipes
    UserSearchPipe,
    LoginComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    // RouterModule.forRoot(routes, { enableTracing: true }), // <-- debugging purposes only
    AppRoutingModuleModule,
    HttpClientModule
  ],
  providers: [AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true
    },
    UserService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }

