export class bill_details{
  constructor(
      public qty:number,
      public price:number,
      public fk_did:number,
      public fk_billid:number
  ){

  }
}
