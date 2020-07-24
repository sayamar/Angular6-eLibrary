import { Component, OnInit, Input } from '@angular/core';
import { Ebook } from '../ebook';
import { EbookService } from '../ebooks.service';
import { Router } from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent  implements OnInit  {

  constructor(private ebookService: EbookService,
    private router: Router) {
   }
   
  
   
  private haveData= 1;  
  ebooks: Ebook[]; 
  private dataRequest = true; 

  ngOnInit(): void  {
  
  	      this.getBooks();
  }

  bookid : number;

 openBook(id:number){
   this.bookid = id;
   alert("hy"+this.bookid);
   this.router.navigateByUrl('/books/buy');
 }


  getBooks() {
   return  this.ebookService.getBooks()
               .subscribe(
                 ebooks => {
                  console.log(ebooks);
                  this.ebooks = ebooks
                 }
         );
  
  }
   
}


