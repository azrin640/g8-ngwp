import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService{

  constructor(
    private http: HttpClient
  ) { }

  getMedia(id)
  {
    console.log(id);
    return this.http.get(`http://localhost:8000/wp-json/wp/v2/media/${ id }`);
  }
}
