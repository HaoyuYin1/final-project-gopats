export class Acc {

  account: string;
  credit: string;
  balance: string;
  transactions: any;
  
  constructor( account: string, credit: string, balance: string,
    transactions: any) {
    this.account = account, this.credit = credit, this.balance = balance, this.transactions = transactions
  }

}
