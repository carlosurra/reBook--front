import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/core/services/library.service';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'rb-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit {
  showBooks = false;
  constructor(
    private router: Router, 
    public libraryService: LibraryService,
    public userService: UserService,
    ) {}

  ngOnInit() {
    this.libraryService
    .getLibrary()
    .subscribe(
      (library) => {if(library.length > 0)this.showBooks = true});
  } 

    deleteBook(id) {
      this.libraryService
      .deleteBook(id)
      .subscribe();
    }

    uploadCover() {
      this.libraryService
      .getLibrary()
      .subscribe()
    }

    refresh(): void {
      window.location.reload();
    }    
  }

