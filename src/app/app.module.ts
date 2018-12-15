// import { routes } from './app.routes';
import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TextComponent } from './text/text.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AngularFireModule } from '@angular/fire/firebase.app.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { config } from 'src/environments/config';
import { ContactsComponent } from './contacts/contacts.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    TextComponent,
    ChatComponent,
    NotfoundComponent,
    ContactsComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  // Imports library for forms builder, para utilizar NgModel por ejemplo
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    RouterModule.forRoot([  // MOVE to app.routing.module.ts
      {
        path: '',
        component: ContactsComponent,
      },
      {
        path: 'chat/:name',
        component: ChatComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: '**',
        component: NotfoundComponent,
      },
  ], { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
