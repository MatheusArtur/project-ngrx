import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { authReducers } from 'src/app/auth/store/auth.reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
