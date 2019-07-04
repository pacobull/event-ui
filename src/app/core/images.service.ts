import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ImagesService {
  constructor(
    private readonly http: HttpClient
  ) {}


  getImage(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Client-ID 9f354e7919a3f56e537616f46b1c1e87b5632d7c7227f2bd469762eed79a6296'
    });

    return this.http
      .get('https://api.unsplash.com/photos/random?orientation=landscape&query=event', { headers })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // Error handling

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}