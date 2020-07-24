import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebooks.service';
import { Forex } from '../forex';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forex-one',
  templateUrl: './forex-one.component.html',
  styleUrls: ['./forex-one.component.css']
})
export class ForexOneComponent implements OnInit {

  constructor(private ebookService: EbookService) { }

  base: string;
  target: string;
  forexdet: Forex[];

  private dataRequest = false; 

  ngOnInit() {
  }

  getData() {
  
  alert("hi"+this.base);
  alert("hi"+this.target);
      this.dataRequest = true
       return  this.ebookService.getData(this.base,this.target)
               .subscribe(
                 forexdet => {
                  console.log(forexdet);
                  this.forexdet = forexdet
                 }
         );
  
  }

}
