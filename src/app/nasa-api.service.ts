import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaAPIService {

  private apiKey = 'f56Wq7dedHbOjBdf6M17T2oQi6tUemgrLZEyd9Cd'

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<[]> {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl).pipe(map((response) => response.url));
  }
}
