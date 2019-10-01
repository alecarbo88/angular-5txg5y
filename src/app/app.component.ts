import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from './_model/user';
import {Router} from '@angular/router';
import {AuthService} from './_services/auth-service.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to  Angular Academy';

  @Output('notify-login') notifyLogin = new EventEmitter();
  showNavbar: boolean;

  constructor(private authService: AuthService) {
    this.showNavbar = this.authService.isLoggedUser();
  }

  ngOnInit(): void {
  }

  onActivate() {
    this.showNavbar = this.authService.isLoggedUser();
  }
}


