import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Artwork } from './artwork'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

   private dataUri = 'http://localhost:3000/artworks'
  //private dataUri = environment.apiUrl + '/artworks';
  
  constructor(private http: HttpClient) { }

  addArtwork(artwork: Artwork): Observable<Artwork> {
    return this.http.post<Artwork>(this.dataUri, artwork)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateArtwork(_id: string, artwork: Artwork): Observable<Artwork> {
    console.log('subscribing to update' + _id);
    let artworkURI: string = this.dataUri + '/' + _id;
    return this.http.put<Artwork>(artworkURI, artwork)
      .pipe(
        catchError(this.handleError)
      )
  }

  getArtworks(): Observable<Artwork[]>{

    console.log("get artworks called" );

    return this.http.get<Artwork[]>(`${this.dataUri}`)
      .pipe(
        catchError(this.handleError)
      )
  }

/** DELETE: delete the Artwork from the server */
deleteArtwork(_id: string): Observable<unknown> {
  const url = `${this.dataUri}/${_id}`; // DELETE 
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

