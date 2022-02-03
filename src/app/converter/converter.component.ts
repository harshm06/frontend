import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor() { }
  // div1: any[] = [];
  @ViewChild('output')
  div1!: ElementRef;
  curr = ['INR', 'EUR', 'USD'];
  inrToForeignRates = [1,0.013,0.015];
  showdiv=false;
  ngOnInit(): void {
  }

  outputValue = (inpval: string, inpcurr: string, outcurr: string) => {
    
    let val = parseInt(inpval, 10);
    let inpindex = this.curr.indexOf(inpcurr);
    let outindex = this.curr.indexOf(outcurr);
    let res = val * this.inrToForeignRates[outindex] / this.inrToForeignRates[inpindex];
    this.div1.nativeElement.innerHTML="Output Value is: " + res; 
    this.showdiv=true;
  };

}
