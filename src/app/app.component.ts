import { AdminGuard } from './admin.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  get userName(): boolean {
    return localStorage.username;
  }

  get isLogged(): boolean {
    return localStorage.logged === 'true';
  }
  
  get isAdmin(): boolean {
    return localStorage.admin === 'true';
  }

  logout() {
    localStorage.logged = false;
    localStorage.admin = false;
    localStorage.username = '';
    if(this.router.url === '/admin'){
      this.router.navigate(['/']);
    }
  }
}
