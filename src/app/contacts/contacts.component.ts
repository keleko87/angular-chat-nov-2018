import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  users;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getUsers().subscribe((users: {results: string}) => {
      console.log(users);
      this.users = users.results;
    });
  }

}
