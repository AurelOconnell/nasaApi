import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaAPIService {

  private apiKey = 'f56Wq7dedHbOjBdf6M17T2oQi6tUemgrLZEyd9Cd'

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<[]> {
    const params = new HttpParams().set('apiKey', this.apiKey);
    return this.http.get<[]>('https://api.nasa.gov/planetary/apod', { params });
  }
}
