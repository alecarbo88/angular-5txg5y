import {Role} from './role';

export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  active: string;
  token: string;
  roles: Role[]

  constructor() {
    this.id = 0;
    this.roles = new Array<Role>();
  }
}
