import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public signupForm: FormGroup = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    lastName: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required]),
  });

  public formState: { [key: string]: AbstractControl<any, any> } = this.signupForm.controls;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  public signup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.authService.register(this.signupForm.value).subscribe(() => {
      this.redirectToLogin();
    });
  }

  public redirectToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
