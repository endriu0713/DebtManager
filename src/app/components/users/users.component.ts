import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }
  users: User[];
  user: User = {
    username: '',
    email: ''
  };

  ngOnInit() {
    this.userDataService.getUsers().subscribe( users => {
      this.users = users;
      console.log('users: ', users);
    });
    // this.userDataService.getUser('patryk').subscribe( user => {
    //   this.user = user;
    //   console.log('user: ', user);
    // });
    // this.userDataService.addUser();

  }

}
