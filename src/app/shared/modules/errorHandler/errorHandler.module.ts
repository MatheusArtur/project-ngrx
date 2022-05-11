import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorHandlerComponent } from 'src/app/auth/components/errorHandler/errorHandler.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorHandlerComponent],
  exports: [ErrorHandlerComponent],
})
export class errorHandlerModule {}
