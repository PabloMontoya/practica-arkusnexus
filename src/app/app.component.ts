import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){}

  isLogged = false;

  user = {name:'Pablo',admin:true};

  login(){
    this.isLogged = true;
  }

  logout(){
    this.isLogged = false;
  }

}
