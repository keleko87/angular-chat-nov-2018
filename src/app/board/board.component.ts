import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  messages;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // Al iniciar me muestre los mensajes que ya haya
    this.messages = this.messageService.getMessages();

    this.messageService.messages$.subscribe((messages) => {
      console.log(messages);
      this.messages = messages;
    });
  }

}
