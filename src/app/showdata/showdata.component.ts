import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Users } from '../users';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  users1: Users[] = []
  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void{
    this.httpservice.getUsers().subscribe(users => this.users1 = users)
  }

}
