import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { EbooksComponent } from '../ebooks/ebooks.component';
import { AddEbookComponent } from '../add-ebook/add-ebook.component';
import { MyLibraryComponent } from '../my-library/my-library.component';
import { SearchComponent } from '../search/search.component';
import { ForexComponent } from '../forex/forex.component';
import { ForexOneComponent } from '../forex-one/forex-one.component';
import { MycartComponent } from '../mycart/mycart.component';
 
const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent 
   },
   { 
     path: 'customer/add', 
     component: AddCustomerComponent 
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent 
   },
   { 
     path: '', 
     redirectTo: 'books', 
     pathMatch: 'full'
   },
    { 
     path: 'books', 
     component: EbooksComponent
   },
   { 
     path: 'books/buy', 
     component: MycartComponent
   },
   { 
     path: 'books/add', 
     component: AddEbookComponent
   },
   
   { 
     path: 'myBooks', 
     component: MyLibraryComponent
   },
   
    { 
     path: 'search', 
     component: SearchComponent
   },
   { 
     path: 'forex', 
     component: ForexComponent
   },

    { 
     path: 'forex-one', 
     component: ForexOneComponent
   },
   
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
 
export class AppRoutingModule {}