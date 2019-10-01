import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../_model/user';
import {Data} from '../../_utils/data';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {TableModel} from '../../_model/table-model';

@Component({
  selector: 'app-utenti-list',
  templateUrl: './utenti-list.component.html',
  styleUrls: ['./utenti-list.component.css'],
})
export class UtentiListComponent implements OnInit {

  users1TableHeader: string;
  userData: User[];
  searchText = '';
  config: TableModel;

  constructor(private router: Router, private userService: UserService) {
    // this.userData = Data.USERS;
    this.users1TableHeader = 'Tabella users';
    this.config = new TableModel();
    this.config.data = this.userData;
    this.config.columLabels = ['username', ''];

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      response => {
        this.userData = (<User[]>response);
      },
      error => {
        console.log('Errore: ' + error.message);
      }
    );
  }

  selectUser(id: number) {
    this.router.navigate(['users', id, 'edit']);
    // this.route.navigateByUrl('users/' + id + '/edit');
  }

  deleteUser(user: User) {
   this.userService.deleteUser(user);
  }
}


