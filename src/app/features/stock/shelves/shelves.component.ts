import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/core/services/library.service';


@Component({
  selector: 'rb-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.scss']
})

export class ShelvesComponent implements OnInit {
  showShelves = false;
  constructor(
    private router: Router, 
    public libraryService: LibraryService,
    ) {}

  ngOnInit() {
    this.libraryService
    .getStock()
    .subscribe(
        (stock) => {if(stock.length > 0)this.showShelves = true});
    }       
    }
  

    
  

