import { PaymentInfo } from "./payment-info";

export class Ticket {

    ticketId:number
	movieName:String;
	theatreName:String;
	price:number;
	totalPrice:number;
	ticketReq:number;
	custName:String;
	paymentstatus:String;
	paymentinfo:PaymentInfo
}
