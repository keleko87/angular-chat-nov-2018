import { MessageService } from './../message.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  username: string;
  message: string;

  @Output() onmessage = new EventEmitter();

  constructor(private userService: UsersService, private messageService: MessageService) { }

  ngOnInit() {
    /**
     * OPCION2: Suscribirse a observable para usuario seleccionado. Sustituye a Ouput onmessage
     */
    this.userService.userSelected$.subscribe(user => {
      this.username = user.name.first;
    });
  }

  sendInfo() {
    // OPCION 1: Ouput
    this.onmessage.emit({ message: this.message, username: this.username });

    // OPCION 2: Servicio al que me suscribo
    // this.messageService.write({ message: this.message, username: this.username });
    this.message = '';
  }
}
