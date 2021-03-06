import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from '../_services/authentication.service';
import {Router} from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private toastr: ToastrService       // Toastr service for alert message
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                this.router.navigate(['login']);
            }

            if (err.status === 403) {
                // auto logout if 401 response returned from api
                this.toastr.error('Yetkisiz bir sayfaya erişim sağlamak istediniz.');
                this.router.navigate(['home']);
            }

            if (err.status === 400) {
                this.toastr.error('Beklenmeyen bir hata oluştu.');
                return throwError('Beklenmeyen bir hata oluştu.');
                
            }
            if (err.status === 512) {
                this.toastr.warning(err.error.message);
                return throwError(err.error.message);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}