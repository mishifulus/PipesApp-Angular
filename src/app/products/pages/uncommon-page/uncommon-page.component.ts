import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Citlalli';
  public gender: 'male'|'female' = 'female';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Fernando';
    this.gender = 'male';
  }

  // i18Plural

  public clients: string[] = ['Maria', 'Pedro', 'Constanza', 'Luis', "Sally"]

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void
  {
    this.clients.shift();
  }

  // KeyValue pipe

  public person = {
    name: 'Citlalli',
    age: 21,
    address: 'Guanajuato, México'
  }

  // Asyn pipe

  public myObservableTime: Observable<number>= interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) =>
  {
    setTimeout(()=> {
      resolve("Tenemos data en la promesa");
    }, 3500)
  })
}
