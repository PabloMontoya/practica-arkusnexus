import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../signup/models/User';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url = 'https://api-arkusnexus.herokuapp.com';

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users`);
  }

  toggleAdmin(user):Observable<User>{
    let updates = {admin:!user.admin};
    return this.http.put<User>(`${this.url}/users/update/${user._id}`,updates,this.httpOptions);
  }

  deleteUser(user):Observable<any>{
    return this.http.delete(`${this.url}/users/delete/${user._id}`);
  }

}
