import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Library, Stock } from 'src/app/core/core.models';

@Injectable({
    providedIn: 'root'  
  })  
  export class LibraryService {  
    library: Library[] = [];
    stock: Stock[] = [];
    userLibrary: Library | { users_uuid } = { users_uuid: 0 };

    constructor(private http: HttpClient, private router: Router){}
    getLibrary() {
        return this.http
        .get(`${environment.apiBaseUrl}/library`).pipe(    
          tap((library: Library[]) => {    
            this.library = library;    
            console.log(this.library);    
          })    
        );        
      }
      deleteBook(id: number) {
        return this.http
        .delete(`${environment.apiBaseUrl}/delete/${id}`)
        .pipe(tap(() => {
          this.library = this.library.filter(
            library => library.id !== id
          );
        }))
      }
      uploadCover(image: File, bookId: string) {
        const formData = new FormData();
        console.log({bookId})    
        formData.append('cover', image);   
        formData.append('id', bookId);   
        return this.http.post(`${environment.apiBaseUrl}/cover`, formData, {
          observe: 'response' 
        }).pipe(tap(something => {
          console.log({something})
        }))
      }
      getLibraryByUuid(users_uuid:string) {
        return this.http
        .get(`${environment.apiBaseUrl}/librarybyuuid`, {
          params: { library_uuid: users_uuid }  
        })  
        .pipe(  
          tap((library: Library) => {  
            this.userLibrary = library[0];  
            console.log(this.userLibrary);  
          })  
        );
      }      
      getStock() {
        return this.http
        .get(`${environment.apiBaseUrl}/stock`).pipe(    
          tap((stock: Stock[]) => {   
            this.stock = stock;    
            console.log(this.stock);    
          })    
        );        
      }

    }
 

    
