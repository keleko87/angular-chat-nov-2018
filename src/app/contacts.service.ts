import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  users;
  // Los servios al igual que todas las clase de Angular son SINGLETON,
  // por lo que si nos creamos un array de users, estos van a persistir,
  // Lo unico que se iniciará será el componente pero la instancia del servicio será la misma siempre
  constructor(private http: HttpClient) {}


  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=5&seed=perrete');
  }


  // CACHE para peticiones CUIDADO al utilizar esto !!!!
  getUsersCache_NOUSED() {
    if (!this.users) {
      // Debemos devolver en ambos un Observable para que tenga consistencia
      return this.http.get('https://randomuser.me/api/?results=5');
        // .pipe(do())  // Do: Podemos ejecutar una función que no tenga que ver con esto.
    } else {
      // Debe devolver un observalbe para que ambas condiciones deban devolverse lo mismo.
      // return Observable.of(this.users);
    }
  }
}
