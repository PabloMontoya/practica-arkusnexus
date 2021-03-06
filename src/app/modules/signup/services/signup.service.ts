import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../signup/models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}

  public url = 'https://api-arkusnexus.herokuapp.com/users/add';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  signup(user: User):Observable<User>{
    return this.http.post<User>(this.url, user, this.httpOptions);
  }
}
