import { Component, OnInit } from '@angular/core';
import { Ebook } from '../ebook';
import { EbookService } from '../ebooks.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {

 constructor(private ebookService: EbookService) { }
  
  private haveData= 1;  
  ebooks: Ebook[]; 
  private dataRequest = true; 

  ngOnInit(): void  {
      this.getMyBooks();
  }
  
  getMyBooks() { 
   return  this.ebookService.getMyBooks()
               .subscribe(
                 ebooks => {
                  console.log(ebooks);
                  this.ebooks = ebooks
                 }
         );
  
  }

}
