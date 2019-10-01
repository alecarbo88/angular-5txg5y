import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../_model/user';

@Component({
  selector: 'tr[app-user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  /**
   * Variabile per passare parametri dal component principale al figlio.
   * Viene imposto anche un alias (user-data)
   */
  @Input('user-data') userRow: User;

  /**
   * Variabile di output per la gestione degli eventi
   * @type {EventEmitter<any>}
   */
  @Output('onDeleteUser') onDeleteUser = new EventEmitter<User>();
  @Output('onSelectUser') onSelectUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  selectUserRow() {

    this.userRow = new User();

    // alert('User selected: ' + this.userRow.id);
    this.onSelectUser.emit(this.userRow);
  }
  deleteUserRow() {
    // alert('User deleted: ' + this.userRow.id);
    this.onDeleteUser.emit(this.userRow);
  }
}
