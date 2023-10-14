import { Component, OnInit } from '@angular/core';
import { AllOrdersService } from 'src/app/services/all-orders.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  constructor(private _AllOrdersService:AllOrdersService){}

  ngOnInit(): void {
    this._AllOrdersService.getOrders().subscribe({
      next:(response)=>{
        console.log(response.data);
      },
      error:(err)=> {
        console.log(err);
        
      },
    })

}
}
