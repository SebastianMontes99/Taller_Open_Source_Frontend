import { Component, OnInit, ViewChild, importProvidersFrom } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OfferService } from '../../listServices/offer.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-offer-table',
  templateUrl: './offer-table.component.html',
  styleUrls: ['./offer-table.component.css']
})
export class OfferTableComponent implements OnInit {
  OfferData!:Offer;
  

  dataSource = new MatTableDataSource();
  displayedColumns:string[]=['id','title','description','points','businessId','actions']

  @ViewChild(MatPaginator, {static: true})
  paginator!:MatPaginator;
  isEditMode=false;

  @ViewChild(MatSort)
  sort!:MatSort;
  
  
  constructor(private offersService:OfferService) {
    this.OfferData = {} as Offer
  }

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllOffers();
    
  }

  getAllOffers()
  {
    this.offersService.getList().subscribe((response:any)=>{
      this.dataSource.data = response
      
    })
  }

  deleteItem(id:string)
  {
    this.offersService.deleteItem(id).subscribe((response: any)=>{
      this.dataSource.data = this.dataSource.data.filter((o:any)=>{
        return o.id !== id ? o: false;
      });
      
    });
    console.log(this.dataSource.data)
    
  }

}