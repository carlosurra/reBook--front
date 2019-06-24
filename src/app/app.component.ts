import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent 

   {}

