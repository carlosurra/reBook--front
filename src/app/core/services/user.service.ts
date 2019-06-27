import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User, Users } from '../core.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  users: Users[];

  
  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: User) => (this.currentUser = user[0])));
  }

  
  

  getUsers() {
    return this.http
    .get(`${environment.apiBaseUrl}/search`)
    .pipe(tap((users: Users[]) => {
      this.users = users;
      console.log(this.users);
    })
    );
  }
}
  

  
