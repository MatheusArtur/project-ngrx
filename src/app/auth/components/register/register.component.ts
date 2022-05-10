import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { registerAction } from "src/app/auth/store/auth.actions";
import { isSubmittingSelector } from "src/app/auth/store/auth.selectors";

@Component({
  selector: "d-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.submitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log(this.submitting$);
  }

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value));
    console.log("submit", this.form.value);
  }
}
