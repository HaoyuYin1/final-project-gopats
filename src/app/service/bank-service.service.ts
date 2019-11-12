import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../model/user';
import { Account } from './../model/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  bankURL: string;
  constructor(private http: HttpClient) {
    this.bankURL = 'http://localhost:7000/bills/';
  }

  getBills(acc: Account): Observable<Account> {
    return this.http.post<Account>(this.bankURL, acc);
  }
}
