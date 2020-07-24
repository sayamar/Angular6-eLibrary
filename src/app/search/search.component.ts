import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Ebook } from '../ebook';
import { EbookService } from '../ebooks.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements  OnInit {

 constructor(private ebookService: EbookService,
  private route: ActivatedRoute,
    private location: Location )
   {
   }
   
  
  message: string;
   
  private haveData= 1;  
  ebooks: Ebook[]; 
  private dataRequest = true; 

	
  
  ngOnInit(): void {
    
  }
  
  doSearch() {
  
      
       return  this.ebookService.getBook(this.message)
               .subscribe(
                 ebooks => {
                  console.log(ebooks);
                  this.ebooks = ebooks
                 }
         );
  
  }
  
  

}
