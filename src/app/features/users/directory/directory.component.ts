import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'rb-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit {
  showUsers = false;
  constructor(
    private router: Router, 
    public userService: UserService,
    ) {}

  ngOnInit() {
    this.userService
    .getUsers()
    .subscribe(
      (users) => {if(users.length > 0)this.showUsers = true});
      this.userService
    .getUserProfile()
    .subscribe(res =>{
      console.log({res})
    })
  } 

    
  }

