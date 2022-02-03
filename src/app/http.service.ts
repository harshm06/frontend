import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Users } from './users';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpobj: HttpClient) { }

  getUsers(): Observable<Users[]>{
     return this.httpobj.get<Users[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getpost(id: number): Observable<Users>{
    return this.httpobj.get<Users>("https://jsonplaceholder.typicode.com/posts/" + id)
  }
}
