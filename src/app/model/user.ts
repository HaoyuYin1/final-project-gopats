export class User {
  _id: string;
  password: string;
  fname: string;
  lname: string;
  phone: string;
  address: string;
  email: string;
  account: any;
  accounts: any;
  budget: any;
  constructor(_id: string, password: string, fname: string, lname: string,
    phone: string, address: string, email: string, card: any, budget: any, accounts: any) {
    this._id = _id, this.password = password, this.fname = fname, this.lname = lname,
      this.phone = phone, this.address = address, this.email = email, this.account = card,
      this.budget = budget, this.accounts = accounts
  }

}
