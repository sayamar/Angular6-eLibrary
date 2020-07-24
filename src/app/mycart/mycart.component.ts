import { Component, OnInit, Input } from '@angular/core';
import { Ebook } from '../ebook';
import { EbookService } from '../ebooks.service';
import { Router } from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  ebooks: Ebook[]; 
  constructor(private ebookService: EbookService,
    private route: Router) { }


 
  ngOnInit() {
          
  }

}
