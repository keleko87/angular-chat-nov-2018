import { MessageService } from './message.service';
import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import { AngularFirestore } from '../../node_modules/@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  messages = [];
  users;
  user;

  /**
   * Constructor de app component, inyectando como
   * dependencia nuestro user service
   * @param usersService : Servicio parar recuperar usuarios
   */
  constructor(
    private usersService: UsersService,
    private messageService: MessageService,
    private db: AngularFirestore
    ) {

    /**
     * Subscribirse a la coleccion de FIREBASE y escuhcar cambios con valueChanges
     */
    this.db.collection('messages').valueChanges().subscribe(messages => {
      console.log(messages);
      this.messages = messages;
    });

    /**
     * Subscripción al método getUsers para recuperar los usuarios
     */
    this.users = this.usersService.getUsers();

    this.messageService.messages$.subscribe(message => {
      this.messages.push({ ...message, image: this.user.picture.medium });
    });
  }

  setUser(user) {
    this.usersService.setUser(user);
    this.user = user;
  }
}
