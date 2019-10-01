import {Data} from '../_utils/data';
import {User} from '../_model/user';
import {BaseApiService} from './base-api-service.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from './app-config.service';

@Injectable()
export class UserService extends BaseApiService {

  users: User[];

  constructor(private http: HttpClient, config: AppConfig) {
    super(http, config);
    this.users = Data.USERS;
  }

  /**
   * Restituisce l'elenco degli utenti.
   */
  getUsers() {
    const url = this.buildRemoteRestUrl('users');
    return this.http.get(url);
  }

  /**
   * Eliminazione dell'utente selezionato.
   * @param {User} user
   */
  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if ( index >= 0) {

      this.users.splice(index,  1 );
    }
  }

  /**
   * Update dello user selezionato
   * @param {User} user
   */
  updateUser(user: User) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    if ( idx !== -1) {
      this.users[idx] = user;
    }
  }

  createUser(user: User) {
      this.users.splice(0, 0, user);
  }

  getUserById(id: number): User {
    let selected: User = null;
    this.users.forEach(
      user => {
        if (user.id === id) {
          selected =  user;
        }
      }
    );
    return selected;
  }
}
