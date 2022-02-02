import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { Dummy } from '../interfaces/dummy';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Dummy[]>{
    return this.http.get<Dummy[]>("https://jsonplaceholder.typicode.com/albums");
  }
}
