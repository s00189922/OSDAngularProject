import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, JsonpClientBackend, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { Event } from './event';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })

export class EventService {

  //private dataUri = environment.apiUrl + '/events'; // URL to web api
  private dataUri = 'http://localhost:3000/events'

  constructor(private http: HttpClient) { }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.dataUri, event)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateEvent(id: string, event: Event): Observable<Event> {
    console.log('subscribing to update/' + id);
    let eventURI: string = this.dataUri + '/' + id;
    return this.http.put<Event>(eventURI, event)
      .pipe(
        catchError(this.handleError)
      )
  }

  getEvents(): Observable<Event[]> {

    console.log("get events called");

    return this.http.get<Event[]>(`${this.dataUri}`)
      .pipe(
        catchError(this.handleError)
      )
  }


  /** DELETE: delete the event from the server */
  deleteEvent(id: string): Observable<unknown> {
    const url = `${this.dataUri}/${id}`; // DELETE 
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }


  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.


      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);



      // question over how much information you want to give to the end-user
      // it depends on who will be using the system
      // this information would not be returned in a public interface but might in an intranet.

      if (error.status == 412) {
        return throwError('412 Error' + JSON.stringify(error.error))
      }

    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}