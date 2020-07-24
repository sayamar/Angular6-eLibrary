import { Component, OnInit } from '@angular/core';
import { Forex } from '../forex';
import { EbookService } from '../ebooks.service';



@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  constructor(private ebookService: EbookService) { }
  forexlist: Forex[];

  ngOnInit() {
    this.getCurrencies();
  }

    
  getCurrencies() {
    return this.ebookService.getCurrencies().subscribe(forexlist => {
      console.log(forexlist);
      this.forexlist = forexlist
    })
    
  }

}
