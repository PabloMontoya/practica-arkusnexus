import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../signup/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public url = 'https://api-arkusnexus.herokuapp.com/users/findbyemail';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  login(user: User):Observable<User>{
    return this.http.post<User>(this.url, user, this.httpOptions);
  }

}
