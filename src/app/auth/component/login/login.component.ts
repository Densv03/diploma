import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../../../service/auth.service";
import { Router } from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private hotToastService: HotToastService) {
  }

  public formState: { [key: string]: AbstractControl<any, any> } = this.loginForm.controls;

  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!)
      .pipe(
        catchError(() => {
          this.hotToastService.error('Email or password is incorrect');
          return of(null);
        })
      )
      .subscribe(data => {
      this.router.navigate(['main', 'create-letter']);
    });
  }

  goToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
