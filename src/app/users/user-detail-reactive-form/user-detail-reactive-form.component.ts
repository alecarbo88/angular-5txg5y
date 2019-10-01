import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../_model/user';
import {Data} from '../../_utils/data';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../../_utils/validation';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-user-detail-reactive-form',
  templateUrl: './user-detail-reactive-form.component.html',
  styleUrls: ['./user-detail-reactive-form.component.css'],
})
export class UserDetailReactiveFormComponent implements OnInit {

  private userCopy: User;
  private _user: User;

  get user() {
    return this._user;
  }

  @Input() set user(user: User) {
    this._user = user;
    this.userCopy = Object.assign({}, this._user);
  }

  public userDetailForm: FormGroup;

  constructor2() {
    this._user = new User();
    this.userDetailForm = new FormGroup({
      txtName: new FormControl(),
      txtLastname: new FormControl(),
      txtActive: new FormControl(),
      txtEmail: new FormControl()});
  }

  constructor(private fb: FormBuilder, private userService: UserService) {

    // this._user = new User();

  }

  ngOnInit() {
    // Configurazione del form
    this.userDetailForm = this.fb.group({
      txtName: [this._user.name, Validators.required],
      txtLastname: [this._user.lastname, Validators.required],
      txtEmail: [this._user.email, [Validators.required, Validators.pattern(Validation.EMAIL_REGEX)]],
      txtActive: [this._user.active]
    });

    // Registraizone del listener degli eventi su tutto il form
    this.userDetailForm.valueChanges.subscribe(
      value => {
        this._user.name = value.txtName;
        this._user.lastname = value.txtLastname;
        this._user.email = value.txtEmail;
        this._user.active = value.txtActive;
      }
    );

    // Registrazione del listener su ogni singolo campo del form
    this.userDetailForm.controls['txtName'].valueChanges.subscribe(
      value => {
        this._user.name = value;
      }
    );
    this.userDetailForm.controls['txtLastname'].valueChanges.subscribe(
      value => {
        this._user.lastname = value;
      }
    );
    this.userDetailForm.controls['txtEmail'].valueChanges.subscribe(
      value => {
        this._user.email = value;
      }
    );
    this.userDetailForm.controls['txtActive'].valueChanges.subscribe(
      value => {
        this._user.active = value;
      }
    );
  }

  resetForm() {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      // Reset dei dati di un utente esistente
      this.user = this.userCopy;
    }
  }

  saveUser() {
    // Visualizzazione dei dati del form
    console.log(this.userDetailForm.value);

    console.log('Accesso alle singole proprietà del form');
    console.log(this.userDetailForm.controls['txtName'].value);
    console.log(this.userDetailForm.controls['txtLastname'].value);
    console.log(this.userDetailForm.controls['txtEmail'].value);
    console.log(this.userDetailForm.controls['txtActive'].value);

    if ( this.user.id > 0) {
      // Richiesto salvataggio di un utente
      const idx = Data.USERS.findIndex((v) => v.id === this.user.id);
      if ( idx !== -1) {
        Data.USERS[idx] = this.user;
      }
    } else {
      // richiesto inserimento nuovo utente
      Data.USERS.push(this.user);
    }
  }
}
