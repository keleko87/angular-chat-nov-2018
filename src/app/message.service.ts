import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '../../node_modules/@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // messageList = [];
  private messages = [];
  messages$ = new Subject();

  constructor(private db: AngularFirestore) {
    // this.messages = this.db.collection('messages');
  }

  write(message) {
    // OPCION 2: Subscribirse a AngularFireStore (Firebase)
    // this.messages.add(message); // add es metodo de la libreria de AngularFireStore

    // OPCION 1: Observable nativo para subscribirse a los mensajes
    // this.messageList.push(message);
    // this.messages$.next(message);
  }

  getMessages() {
    return this.messages;
  }

  saveMessage(message) {
    this.messages.push(message); // Lo guardamos en el array
    this.messages$.next(this.messages); // El next lo que hace es mandar un evento para que todos los suscritos se enteren del cambio
  }
}
