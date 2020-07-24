import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
 
import { AppRoutingModule }     from './app-routing/app-routing.module';
 
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { AddEbookComponent } from './add-ebook/add-ebook.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { EbookDetailsComponent } from './ebook-details/ebook-details.component';
import { SearchComponent } from './search/search.component';
import { ForexComponent } from './forex/forex.component';
import { ForexOneComponent } from './forex-one/forex-one.component';
import { MycartComponent } from './mycart/mycart.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    EbooksComponent,
    AddEbookComponent,
    MyLibraryComponent,
    EbookDetailsComponent,
    SearchComponent,
    ForexComponent,
    ForexOneComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }