import { Component, Input, OnInit } from '@angular/core';
import { ApiErrorsInterface } from 'src/app/shared/apiErrors.interface';

@Component({
  selector: 'error-handler',
  templateUrl: './errorHandler.component.html',
  styleUrls: ['./errorHandler.component.scss'],
})
export class ErrorHandlerComponent implements OnInit {
  @Input('apiErrors') apiErrorsInput: ApiErrorsInterface;
  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.apiErrorsInput).map(
      (name: string) => {
        const message = this.apiErrorsInput[name].join(' ');
        return `${name} ${message}`;
      }
    );
  }
}
