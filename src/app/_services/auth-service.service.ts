import { Injectable } from '@angular/core';
import {BaseApiService} from './base-api-service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../_model/user';
import 'rxjs/add/operator/map';
import {AppConfig} from './app-config.service';

@Injectable()
export class AuthService extends BaseApiService {

  constructor(private http: HttpClient, config: AppConfig) {
    super(http, config);
  }

  login(username: string, password: string): Observable<boolean> {

    let sessionuser: User = null;
    const auth = new Observable<boolean>(
      (observer) => {


        const url = this.buildRemoteRestUrl('users?username=' + username + '&password=' + password);
        this.http.get(url).subscribe(
            res => {
              if (res[0]) {
                sessionuser = (<User>res[0]);
                sessionuser.password = null;
                console.log('loggato');
                // Salvataggio dell'utente loggato
                this.storeSessionUser(sessionuser);

                // Sblocco dell'observable con OK
                observer.next(true);
                observer.complete();
              } else {
                console.log('non loggato');
                // Sblocco dell'observable con KO
                observer.next(false);
                observer.complete();
              }
            }
        );
      }
    );
    return auth;
  }

  /**
   * Salva i dati dell'utente loggato nel localStorage
   * @param {User} loggedOne
   */
  private storeSessionUser(loggedOne: User) {
    localStorage.setItem('currentUser', JSON.stringify(loggedOne));
  }

  /**
   * Recupera i dati dell'utente loggato dal localStorage
   * @returns {User}
   */
  public getLoggedUserFromSessionStorage(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  isLoggedUser(): boolean {
    const user: User = this.getLoggedUserFromSessionStorage();
    if (user && user.token) {
      return true;
    }
    return false;
  }
  /**
   * Effettua il logout rimuovendo l'utente loggato dal
   * localStorage
   */
  logout() {
    localStorage.removeItem('currentUser');
  }
}
