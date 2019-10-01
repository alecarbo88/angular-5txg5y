import { Component, OnInit } from '@angular/core';
import {User} from '../../_model/user';
import { Input } from '@angular/core';
import {Data} from '../../_utils/data';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy: User;
  user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {

    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(

      (params) => {

        /*
            ATTENZIONE!!! Se non si effettua una copia dell'utente passato si modificano
            direttamente i dati dell'array durante l'interazione del form prima della conferma.
            Questo avviene perchè lo UserService viene iniettato nel modulo principale
            rendendolo a tutti gli effetti un SINGLETON.
         */
        this.userCopy = this.userService.getUserById(+params.id);
        this.user = Object.assign({}, this.userCopy);
      }
    );
  }


  /**
   *
   */
  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      // Reset dei dati di un utente esistente
      this.user = this.userCopy;
    }
  }

  saveUser() {

    if ( this.user.id > 0) {
      // Richiesto salvataggio di un utente
      const idx = Data.USERS.findIndex((v) => v.id === this.user.id);
      if ( idx !== -1) {
        Data.USERS[idx] = this.user;
      }
    } else {
      // richiesto inserimento nuovo utente
    }
  }
}
