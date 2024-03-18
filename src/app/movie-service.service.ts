import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private apiUrl = 'http://localhost:3001/movies';

  constructor(private http : HttpClient) {

   }

   getMovies():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
   }
}
