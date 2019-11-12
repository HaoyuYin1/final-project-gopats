import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../model/user';
import { LoginUser } from './../model/login-user';
import { SignUpUser } from './../model/sign-up-user';
import { Email } from './../model/email';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  userResource: string;
  userResourceURL: string;
  emailResource: string;
  loginURL: string;
  loginResource: string;
  emailResourceURL: string;
  signUpResource: string;
  signUpURL: string;

  constructor(private http: HttpClient) {
    this.userResource = 'users/';
    this.emailResource = 'sendemail/';
    this.loginResource = 'login/';
    this.signUpResource = 'signup/';
    this.userResourceURL = `${environment.serverBaseURL}/${this.userResource}`;
    this.loginURL = `${environment.serverBaseURL}/${this.loginResource}`;
    this.signUpURL = `${environment.serverBaseURL}/${this.signUpResource}`;
    this.emailResourceURL = `${environment.serverBaseURL}/${this.emailResource}`;
  }

  send(email: Email): Observable<Email> {
    // console.log(this.http.post<Email>(this.emailResourceURL, email));
    return this.http.post<Email>(this.emailResourceURL, email);
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.userResourceURL);
  }

  authenticate(loginUser: LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(this.loginURL, loginUser);
  }

  checkUser(user: SignUpUser): Observable<SignUpUser> {
    return this.http.post<SignUpUser>(this.signUpURL, user);
  }

  getSingleUser(_id: string): Observable<User> {
    return this.http.get<User>(this.userResourceURL + _id);
  }

  deleteUser(_id: string): Observable<User> {
    return this.http.delete<User>(this.userResourceURL + _id);
  }

  updateUser(_id: string, user: User): Observable<User> {
    return this.http.put<User>(this.userResourceURL + _id, user);
  }

  /**
   * Creates new user.
   *
   * @param  {User} user: User {new user object}
   * @return {Observable<User>} {Observable for saved user object}
   */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userResourceURL, user);
  }

}
