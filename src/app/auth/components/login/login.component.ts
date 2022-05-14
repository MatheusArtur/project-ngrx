import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from 'src/app/auth/store/actions/login.action';

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/auth.selectors';
import { ApiErrorsInterface } from 'src/app/shared/apiErrors.interface';
import { LoginRequestInterface } from 'src/app/shared/types/loginRequest.interface';

@Component({
  selector: 'd-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitting$: Observable<boolean>;
  apiErrors$: Observable<ApiErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.submitting$ = this.store.pipe(select(isSubmittingSelector));
    this.apiErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
