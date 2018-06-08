import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  public errorResponse: any = {
    type: '',
    status: 0,
    message: '',
    actions: () => {
      console.log(this.errorResponse);
    }
  };
  constructor(private injector: Injector) { }
    handleError(error: any): any {
      if (error instanceof HttpErrorResponse) {
        this.errorResponse.status = error.status;
        this.errorResponse.type = 1;
        this.errorResponse.message = error.status;
        this.errorResponse.actions();
      } else {
        this.errorResponse.status = error.status;
        this.errorResponse.type = 2;
        this.errorResponse.message = error.status;
        this.errorResponse.actions();
      }
      return this.errorResponse;
  }
}
