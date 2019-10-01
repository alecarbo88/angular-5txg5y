import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck,
  AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  num: number = 0;

  /**
   * 1. Chiamato alla creazione del componente
   */
  constructor() { }

  add() {
    console.log('CLICKED')
    this.num++;
  }

  /**
   * 3. OnInit:
   * Rappresenta la fase di inizializzazione del componente e si verifica dopo il primo evento OnChanges.
   * Questa fase viene eseguita una sola volta durante il ciclo di vita del componente.
   */
  ngOnInit() {
    console.log('ngOnInit');
  }

  /**
   * 2. OnChanges:
   * Si verifica quando il valore di una proprietà di input viene modificato.
   * Oltre a verificarsi prima dell’inizializzazione del componente,
   * si verifica anche ogni qualvolta cambia il valore delle proprietà di input
   */
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  /**
   * 4. DoCheck:
   * Questa fase viene eseguita durante il check interno di Angular per valutare le modifiche ai componenti ed ai dati.
   */
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  /**
   * 5. AfterContentInit:
   * In questa fase il contenuto associato al componente è stato inizializzato.
   * In particolare, è stato costruito l’albero degli eventuali componenti figli.
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  /**
   * 6. AfterContentChecked:
   * Anche questa fase viene eseguita durante un check interno di Angular sui contenuti associati al componente.
   */
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  /**
   * 7. AfterViewInit:
   * Questa è la fase di inizializzazione della view associata al componente.
   * In questa fase il componente risulta mappato sul DOM ed è quindi visibile.
   */
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  /**
   * 8. AfterViewChecked:
   * Come per le altre fasi checked, anche in questo caso questa fase riguarda il check interno di Angular sulla view appena generata.
   */
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  /**
   * 9. OnDestroy:
   * Questa è l’ultima fase del ciclo di vita del componente e si verifica prima che Angular lo distrugga definitivamente.
   * Questa fase viene eseguita una sola volta durante il ciclo di vita del componente.
   */
  ngOnDestroy() {
    console.log('ngOnDestory');
  }

}
