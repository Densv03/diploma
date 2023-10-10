import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router,
              private authService: AuthService) { }

  public signup(): void {
    if (this.signupForm.invalid) {
      return;
    }
    this.authService.register(this.signupForm.value.username!, this.signupForm.value.password!).subscribe(data => {
      console.log(data)
      this.redirectToLogin();
    });
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
