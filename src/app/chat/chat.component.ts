import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages = [];
  destinatary;
  snapshot;

  constructor(
    private router: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.snapshot = router.snapshot;
  }

  ngOnInit() {
    console.log(this.router);
    // OPCION 1: ActivatedRoute devuelve un observable por tanto hay que suscribirse.
    this.router.params.subscribe(params => {
      this.destinatary = params.name;
    });

    // OPCION 2: Tambien podrías usar ActivatedRouteSnapshot
    console.log('snapshot: ', this.snapshot);
  }

  /**
   * Añade un nuevo mensaje
   * @param message string
   */
  addMessage(message) {
    // Con este servicio tendremos disponibles los messages para el resto de componentes.
    this.messageService.saveMessage(message);
  }
}
