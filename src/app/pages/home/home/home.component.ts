import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../../core/interfaces/product/iproduct';
import { ProductService } from '../../../core/services/product/product.service';
import { from, Subscription } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchPipe } from '../../../shared/pipe/search/search.pipe';
import{FormsModule}from'@angular/forms'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterLinkActive,SearchPipe,FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  
  searchValue: string='';
  productsData!:IProduct[];
  productSub!:Subscription

  private readonly _ProductService=inject(ProductService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
  ngOnInit(): void {
    this.productSub=this._ProductService.getAllproducts().subscribe({
      next:(res)=>{
        console.log(res);
        this._NgxSpinnerService.hide();

        this.productsData=res;
        
      },
      error:(err)=>{

        console.log(err);
        
      }
    })
    
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }


}
