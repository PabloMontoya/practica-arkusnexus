import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  public photosSource = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

  constructor(private http: HttpClient) {}

  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.photosSource);
  }
}
