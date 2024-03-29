import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm?: FormGroup;
  message: String = "";


  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit() {
    this.userService.createUser(this.userForm?.value)
      .subscribe({
        next: user => {
          console.log(JSON.stringify(user) + ' has been added');
          this.message = "new user has been added";
        },
        error: (err) => this.message = err
      });
  }

  dismissAlert() {
    this.message = "";
  }

}
