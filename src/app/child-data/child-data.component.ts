import { Component, Input, OnInit } from '@angular/core';
import { Dummy } from '../interfaces/dummy';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  albumlist: Dummy[]=[]
}
