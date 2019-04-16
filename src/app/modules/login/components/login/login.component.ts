import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  flagLogin: boolean = false;
  flagPassword: boolean = false;

	constructor ( public loginService: LoginService, 
                private fb: FormBuilder,
                private router: Router) {}
	
	ngOnInit() {
		this.loginForm = this.fb.group({
			email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
		})
	}

	get email(){
		return this.loginForm.get('email');
	}

	get password(){
		return this.loginForm.get('password');
	}

	onSubmit(email,password){
    this.flagLogin = false;
    this.flagPassword = false;

    let user = {email:email};

    this.loginService.login(user).subscribe(
      user => {
        if (user){
          if(email == user.email && password == user.password){
            localStorage.logged = true;
            localStorage.username = user.firstname;
            if(user.admin){
              localStorage.admin = true;
            }
            this.router.navigate(['/']);
          }else {
            this.flagPassword = true;
          }
        }else {
          this.flagLogin = true
        }
        
      },
      err => this.flagLogin = true
    );
	}

}
