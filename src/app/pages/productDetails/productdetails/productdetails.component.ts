import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../core/interfaces/product/iproduct';
import { log } from 'console';
import { NavbarComponent } from "../../../layouts/navbar/navbar/navbar.component";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-productdetails',
  imports: [NavbarComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit {


  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
  private readonly _ProductService=inject(ProductService)
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  productId!: string;
  productDetials:IProduct | null = null;



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{

        this.productId= param.get('p_id') !;


      }
    })

    this._ProductService.getSpecificPeoducts(this.productId).subscribe({
      next:(res)=>{

        console.log(res);
        this._NgxSpinnerService.hide();

        
        this.productDetials=res;

      }
      
    })
  }






}
