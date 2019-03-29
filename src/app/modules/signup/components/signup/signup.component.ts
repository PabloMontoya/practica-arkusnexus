import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/modules/signup/services/signup.service';
import { User } from 'src/app/modules/signup/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public signupService: SignupService) { }

  ngOnInit() {
    // this.signupService.getPhotos();
  }

}
