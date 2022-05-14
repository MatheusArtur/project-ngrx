import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions/register.actions';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/auth.selectors';
import { ApiErrorsInterface } from 'src/app/shared/apiErrors.interface';
import { RegisterRequestInterface } from 'src/app/shared/types/registerRequest.interface';

@Component({
  selector: 'd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitting$: Observable<boolean>;
  apiErrors$: Observable<ApiErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      username: ['', Validators.required],
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
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
