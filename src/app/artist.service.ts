import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Artist } from './artist'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private dataUri = 'http://localhost:3000/artists'

  constructor(private http: HttpClient) { }

  addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.dataUri, artist)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateArtist(id: string, artist: Artist): Observable<Artist> {
    console.log('subscribing to update' + id);
    let artistURI: string = this.dataUri + '/' + id;
    return this.http.put<Artist>(artistURI, artist)
      .pipe(
        catchError(this.handleError)
      )
  }

  getArtists(): Observable<Artist[]>{

    console.log("get artists called" );

    return this.http.get<Artist[]>(`${this.dataUri}`)
      .pipe(
        catchError(this.handleError)
      )
  }

/** DELETE: delete the Artist from the server */
deleteArtist(id: string): Observable<unknown> {
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
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}

