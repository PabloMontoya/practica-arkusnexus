import { AdminGuard } from './admin.guard';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  user = { name: 'Pablo', admin: true };

  get isLogged(): boolean {
    return localStorage.logged === 'true';
  }

  login() {
    localStorage.logged = true;
  }

  toggleAdmin() {
    this.user.admin = localStorage.admin = !(localStorage.admin === 'true');
    if (!this.user.admin) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.logged = false;
  }
}
