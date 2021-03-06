import { Injectable, transition } from '@angular/core';
import { Data } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Transaction } from './transactions';
import { copyConfig } from '@angular/router/src/config';


@Injectable()
export class DataService {

  constructor() { }


findAll(): any[] {
   return [
    {Date:"15-05-2018",Month:"May",TXnID:"8400110",Description:"Payment Received",TransType:"Credit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"",Camount:"USD 125000" },
    {Date:"14-05-2018",Month:"May",TXnID:"8300345",Description:"BABA CONFECTIONERY",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"USD 6800",Camount:"" },
    {Date:"05-05-2018",Month:"May",TXnID:"8300135",Description:"B Q000000000000000",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"USD 25000",Camount:"" },
    {Date:"03-05-2018",Month:"May",TXnID:"8100054",Description:"AUTO-STORE(MOTOR F",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 1100",Camount:"" },
    {Date:"02-05-2018",Month:"May",TXnID:"7999584",Description:"ATLANTIC SHOPPING",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 2650",Camount:"" },
    {Date:"02-05-2018",Month:"May",TXnID:"7999125",Description:"ATG TICKET WEB",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 1500",Camount:"" },
    {Date:"01-05-2018",Month:"May",TXnID:"7999008",Description:"ASDA SUPERSTORE",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 8900",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7892000",Description:"TFL OYST PHOTOCARD0",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"USD 6900",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7892011",Description:"A&Y LOCKSMITHS",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 4325",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7892035",Description:"AA MEDIA",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 8500",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7892098",Description:"ACE GRAPHICS",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 22000",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7990000",Description:"ADOBE CREATIVE CLOUD",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 15000",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7991003",Description:"ADOBE SYSTEMS SOFTWARE",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"USD 3200",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7991204",Description:"AMAZON EU",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"USD 45000",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"7998100",Description:"ASDA HOME SHOPPING",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 4500",Camount:"" },
    {Date:"28-04-2018",Month:"Apr",TXnID:"7891395",Description:"WWW.OXFORDSHIRE.GOV",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 7645",Camount:"" },
    {Date:"26-04-2018",Month:"Apr",TXnID:"7891300",Description:"WWW.COMAPRETHEMANAN",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 2350",Camount:"" },
    {Date:"25-04-2018",Month:"Apr",TXnID:"7891228",Description:"TV LICENSING0000000",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 500",Camount:"" },
    {Date:"25-04-2018",Month:"Apr",TXnID:"7891221",Description:"KEMPSFORD HSE HTL00",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"USD 1650",Camount:"" },
    {Date:"23-04-2018",Month:"Apr",TXnID:"7891110",Description:"GRO HM PASSPORT OFF",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5518",Cardtype:"Secondary",DAmount:"USD 500",Camount:"" },
    {Date:"22-04-2018",Month:"Apr",TXnID:"7890321",Description:"DOMINOS PIZZA (BARN",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 1250",Camount:"" },
    {Date:"18-04-2018",Month:"Apr",TXnID:"7890001",Description:"CHOPSTIX00000000000",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 5400",Camount:"" },
    {Date:"16-04-2018",Month:"Apr",TXnID:"7883215",Description:"99P STORES LTD",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 15000",Camount:"" },
    {Date:"15-04-2018",Month:"Apr",TXnID:"7882415",Description:"99 PLUS DISCOUNT MART",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 2300",Camount:"" },
    {Date:"15-04-2018",Month:"Apr", TXnID:"7882355",Description:"43033820 COSTA COFFEE",TransType:"Debit",UserID:"CreditUser" ,Username:"Alice",Cardno:"4448-XXX-XXXX-5500",Cardtype:"Primary",DAmount:"USD 1500",Camount:"" },
    
    
    //Prepaid User
    
    {Date:"30-05-2018",Month:"May",TXnID:"843245",Description:"HOTELS COM126051618120",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:"USD 25000",Camount:"" },
    {Date:"30-05-2018",Month:"May",TXnID:"855556",Description:"HOTELS COM127598293577",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:"SGD 6800",Camount:"" },
    {Date:"06-05-2018",Month:"May",TXnID:"820003",Description:"HORSEBRIDGE ARTS & COM",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 1100",Camount:"" },
    {Date:"05-05-2018",Month:"May",TXnID:"700155",Description:"HOBBY CRAFT LTD",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 1500",Camount:"" },
    {Date:"05-05-2018",Month:"May",TXnID:"712555",Description:"HOLLAND & BARRETT",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"SGD 2650",Camount:"" },
    {Date:"04-05-2018",Month:"May",TXnID:"700022",Description:"HMCOURTS-SERVICE.G",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 8900",Camount:"" },
    {Date:"03-05-2018",Month:"May",TXnID:"691002",Description:"HIREITAILL.COM LTD",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 4500",Camount:"" },
    {Date:"01-05-2018",Month:"May",TXnID:"682011",Description:"Payment Recived",TransType:"Credit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:"",Camount:"SGD 5000" },
    {Date:"01-05-2018",Month:"May",TXnID:"682125",Description:"HIGH BARNET DENTAL",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:"USD 45000",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"668950",Description:"HEAD - BRISTOL",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"SGD 4325",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"668954",Description:"HEATH NEWS LTD",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 8500",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"668963",Description:"HEMSLEY FRASER GROUP L",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 22000",Camount:"" },
    {Date:"30-04-2018",Month:"Apr",TXnID:"682000",Description:"HENDON NEWSAGENTS",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 15000",Camount:"" },
    {Date:"29-04-2018",Month:"Apr",TXnID:"668859",Description:"HAYMARKET PUBLISHI",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:"USD 6900",Camount:"" },
    {Date:"28-04-2018",Month:"Apr",TXnID:"661000",Description:"Payment Recived",TransType:"Credit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:" ",Camount:"USD 3000" },
    {Date:"27-04-2018",Month:"Apr",TXnID:"650121",Description:"HAROLD BENJAMIN SOLICI",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 2350",Camount:"" },
    {Date:"25-04-2018",Month:"Apr",TXnID:"650001",Description:"Transfer from Alice",TransType:"Credit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:"",Camount:" SGD 10000" },
    {Date:"25-04-2018",Month:"Apr",TXnID:"650011",Description:"HAND WASH CENTRE",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"SGD 500",Camount:"" },
    {Date:"23-04-2018",Month:"Apr",TXnID:"635302",Description:"HALFORDS 0744000000",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Secondary",DAmount:"USD 500",Camount:"" },
    {Date:"22-04-2018",Month:"Apr",TXnID:"634005",Description:"HALFORDS 0370",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"SGD 1250",Camount:"" },
    {Date:"18-04-2018",Month:"Apr",TXnID:"633200",Description:"HALAL FOOD DIRECT LTD",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 5400",Camount:"" },
    {Date:"16-04-2018",Month:"Apr",TXnID:"600001",Description:"GRO HM PASSPORT OFFICE",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"USD 1500",Camount:"" },
    {Date:"16-04-2018",Month:"Apr",TXnID:"600015",Description:"H HARIA CHEMIST",TransType:"Debit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"SGD 2300",Camount:"" },
    {Date:"16-04-2018",Month:"Apr",TXnID:"610055",Description:"Payment Recived",TransType:"Credit",UserID:"PrepaidUser" ,Username:"Bob",Cardno:"4448-XXX-XXXX-8743",Cardtype:"Primary",DAmount:"",Camount:"USD 15000" }
    
    
   ]       
  }
getData(type:string,cardno:string,UserID:string,fDate:Date,Date:Date) : Transaction[] {
 
    var transactions = this.findAll()  
      //return   transactions.filter(c=>c.Date>fDate );
 
    if(cardno=="All" && type=="Both")
  {
 //   alert((c=>c.Date>fDate && c.Date<Date));
    return   transactions.filter(c=>c.TransType!=type && c.Cardno!=cardno && c.UserID==UserID && (c.Date>=fDate && c.Date<=Date));
  }
  
  else if (type == "Both" )  
  {
 return   transactions.filter(c=>c.TransType!=type && c.Cardno==cardno  && c.UserID==UserID &&(c.Date>=fDate && c.Date<=Date));
  }
  else if (cardno=="All")
  {  
    return   transactions.filter(c=>c.TransType==type && c.Cardno!=cardno  && c.UserID==UserID &&(c.Date>fDate && c.Date<Date));
  } 
  else 
  {  
    return   transactions.filter(c=>c.TransType==type && c.Cardno==cardno  && c.UserID==UserID &&(c.Date>fDate && c.Date<Date));
  } 
 
}
getAllData(UserID:string) : Transaction[] {
 
  var transactions = this.findAll()  

  return   transactions.filter(c=>c.UserID==UserID);
}

getStatementData(UserID:string,month:string) : Transaction[] {
 
  var transactions = this.findAll()  
  
if (month!= "May")
{
    return transactions.filter(c=>c.UserID==UserID && c.Month=="Apr");
}
else 
{
 
  return   transactions.filter(c=>c.UserID==UserID && c.Month=="May");
}
 
}
}
