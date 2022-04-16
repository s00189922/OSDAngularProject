import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { ArtistListComponent } from 'src/app/artist2/artist-list/artist-list.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  message: string = "";



  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe({
      next: (value: User[]) => this.userList = value,
      complete: () => console.log('artist service finished'),
      error: (mess) => this.message = mess
    })
  }

  dismissAlert() {
    this.message = "";
  }

}
