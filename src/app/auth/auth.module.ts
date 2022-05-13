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
import { errorHandlerModule } from 'src/app/shared/modules/errorHandler/errorHandler.module';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';

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
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    errorHandlerModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, LocalStorageService],
})
export class AuthModule {}
