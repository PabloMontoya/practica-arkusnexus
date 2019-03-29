import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(){
    // return this.http.get<User>('https://jsonplaceholder.typicode.com/photos?_limit=10');
  }
  
}
