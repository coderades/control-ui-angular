import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-find',
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.scss'],
})
export class UserFindComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log("xxxxxxxxxxxxxxxxxxxx");
    this.userService.getUsers().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
