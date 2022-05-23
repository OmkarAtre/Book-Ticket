import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import * as internal from 'assert';
import { ThirdClass } from './third-class';
import { Theatre } from './theatre';
import { Ticket } from './ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scoreboard';

  constructor(public http:HttpClient)
  {

  }
  custName:String;
  movieName:String;
  ticketReq:number;

  watch:number=0;

  theatrelist:Theatre[];
  time2:String
  
  custid:number;
  ticket()
  {
    let url="http://localhost:8081/ticket"+this.custName+"and"+this.movieName+"and"+this.ticketReq
    this.http.get(url).subscribe((data:ThirdClass)=>
    {
      if(data==null)
      {
        this.watch==0;
        this.custName="";
        this.movieName="";
        this.ticketReq=0;
      }
     this.theatrelist=data.theatre
      console.log(data.id);
      data.theatre.forEach(element => 
      {
        this.time2=element.time1;
      });
      console.log(this.time2)
      this.custid=data.id
      this.watch=1;
    
    }
    )
  }

  ticket1:Ticket;
  theatre1:number;

  theatre(theatreId:number)
  {
    this.theatre1=theatreId;
    let url="http://localhost:8081/ticketGeneration"+this.custid+"and"+theatreId
    this.http.get(url).subscribe((data:Ticket)=>
    {
      console.log(data);
      this.ticket1=data;
      console.log(this.ticket1);
      this.watch=2;
      
    }
    )
  }

  theatreName:String
  movieName1:String
  time:String
  seatingCapacity:number;
  price:number;

  addTheatre()
  {
    this.watch=3;
  }

  result:String

  addtheatre()
  {
    let url="http://localhost:8081/addtheatre"+this.theatreName+"and"+this.movieName1+"and"+this.time+"and"+this.seatingCapacity+"and"+this.price
    this.http.get(url).subscribe((data:number)=>
    {
      console.log(data);
      if(data==1)
      {
       this.result="successful";
       this.watch=4;
       this.theatreName="";
       this.movieName1="";
       this.seatingCapacity=0;
       this.price=0;
      }

      if(data==0)
      {
       this.result="Failure";
       this.watch=4;
       this.theatreName="";
       this.movieName1="";
       this.seatingCapacity=0;
       this.price=0;
      }
      
    }
    )
  }

  ticketid:number
  totalprice1:number;

  pay(ticketId:number,totalPrice:number)
  {
    this.ticketid=ticketId;
    this.totalprice1=totalPrice;
    this.watch=5;
  }

  paymentType:String;
  mobileNumber:number
  finalTicket:Ticket;

  payment()
  {

    let url="http://localhost:8081/payment"+this.paymentType+"and"+this.mobileNumber+"and"+this.ticketid+"and"+this.theatre1
    this.http.get(url).subscribe((data:Ticket)=>
    {
      this.finalTicket=data;
      this.watch=6;
    }
    )

  }
can:number
  cancel()
  {
    let url="http://localhost:8081/cancel"+this.custid
    this.http.get(url).subscribe((data:number)=>
    {
      this.can=data
      console.log(this.can);
      this.watch=0;
      this.custName="";
      this.movieName="";
      this.ticketReq=0;
    })
  }

  cancel1()
  {
    let url="http://localhost:8081/cancel"+this.custid
    this.http.get(url).subscribe((data:number)=>
    {
      this.watch=0;
      this.custName="";
      this.movieName="";
      this.ticketReq=0;
    })
  }
}

