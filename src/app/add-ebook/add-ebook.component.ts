import { Component, OnInit } from '@angular/core';
import { Ebook } from '../ebook';
import { EbookService } from '../ebooks.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-ebook',
  templateUrl: './add-ebook.component.html',
  styleUrls: ['./add-ebook.component.css']
})
export class AddEbookComponent  {

  ebook = new Ebook();
  submitted = false;
 
  
  constructor(
   private ebookService: EbookService,
   private location: Location
  ) { }
 
  newBook(): void {
    this.submitted = false;
    this.ebook = new Ebook();
  }
 
 addBook() {
   this.submitted = true;
   this.save();
 }
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    this.ebookService.addBook(this.ebook) 
        .subscribe();
  }
  
  

}
