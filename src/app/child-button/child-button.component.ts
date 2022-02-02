import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-button',
  templateUrl: './child-button.component.html',
  styleUrls: ['./child-button.component.css']
})
export class ChildButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() checked = new EventEmitter<{dosort: boolean, col: string}>();
  
  sortdata(evt: Event){
    let field =  (evt.target as HTMLInputElement).value;
    let sort=(evt.target as HTMLInputElement).checked;
    this.checked.emit({dosort:sort, col: field});
  }
}
