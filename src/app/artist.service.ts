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

  // private dummyArtistsData : Artist[] = 
  //   [{"tags":[], 
  //   "_id":"61643ac437689140c4239e5b",
  //   "first_name": "Dennison",
  //   "last_name": "Dominique",
  //   "email": "ddominique0@va.gov",
  //   "phone_number": 5826887340,
  //   "gender": "Male",
  //   "nationality": "Yaqui",
  //   "year_born": 1972
  // }, {"tags":[], 
  //   "_id":"61643ac437689140c4239e5c",
  //   "first_name": "Abbie",
  //   "last_name": "Shire",
  //   "email": "ashire1@japanpost.jp",
  //   "phone_number": 5826887340,
  //   "gender": "Male",
  //   "nationality": "Yaqui",
  //   "year_born": 1972
  // }, {"tags":[], 
  //   "_id":"61643ac437689140c4238e5b",
  //   "first_name": "Carlota",
  //   "last_name": "Aishford",
  //   "email": "caishford2@hostgator.com",
  //   "phone_number": 4674647179,
  //   "gender": "Female",
  //   "nationality": "Mexican",
  //   "year_born": 1937
  // }, {"tags":[], 
  //   "_id":"68643ac437689140c4239e5b",
  //   "first_name": 
  //   "Leoine",
  //   "last_name": "Echallier",
  //   "email": "lechallier3@wiley.com",
  //   "phone_number": 8382970218,
  //   "gender": "Female",
  //   "nationality": "Paiute",
  //   "year_born": 1926
  // }, {"tags":[], 
  //   "_id":"61043ac437689140c4239e5b",
  //   "first_name": "Leontine",
  //   "last_name": "Lamdin",
  //   "email": "llamdin4@livejournal.com",
  //   "phone_number": 1054162605,
  //   "gender": "Female",
  //   "nationality": "Creek",
  //   "year_born": 1998
  // }, {"tags":[], 
  //   "_id":"61643ac437689040c4239e5b",
  //   "first_name": "Elfreda",
  //   "last_name": "Weatherley",
  //   "email": "eweatherley5@youtu.be",
  //   "phone_number": 8007921174,
  //   "gender": "Agender",
  //   "nationality": "Japanese",
  //   "year_born": 1911
  // }]
  


  getArtists(): Observable<Artist[]>{

    console.log("get artists called" );

    return this.http.get<Artist[]>(`${this.dataUri}?limit=5`)
      .pipe(
        catchError(this.handleError)
      )
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

