import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormData } from './login.dto';

@Component({
  selector: 'app-ng-login-form',
  templateUrl: './ng-login-form.component.html',
  styleUrls: ['./ng-login-form.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NgLoginFormComponent {
  @Input('emailLabel') emailLabel: string = 'Email';
  @Input('emailPlaceholder') emailPlaceholder: string =
    'Please insert your email';
  @Input('passLabel') passLabel: string = 'Pass';
  @Input('passPlaceholder') passPlaceholder: string = 'Pass';
  @Input('buttonLabel') buttonLabel: string = 'button';
  @Input('forgotPassword') forgotPassword: string = 'Forgot Password';

  @Output() formValues: EventEmitter<LoginFormData> =
    new EventEmitter<LoginFormData>();

  @Output() forgotPasswordEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  submit(): void {
    const loginFormData: LoginFormData = new LoginFormData();
    loginFormData.email = this.loginForm.get('email')?.value;
    loginFormData.pass = this.loginForm.get('pass')?.value;
    this.formValues.emit(loginFormData);
  }

  forgotPasswordEmit() {
    this.forgotPasswordEmitter.emit(true);
  }
}
