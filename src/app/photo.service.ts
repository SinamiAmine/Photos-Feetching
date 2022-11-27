import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  url = 'https://api.unsplash.com/photos/random';
  constructor(private httpClient: HttpClient) {}

  getRandomImage() {
    return this.httpClient.get<UnsplashResponse>(this.url, {
      headers: {
        Authorization: 'Client-ID ACCESS_TOKEN',
      },
    });
    // .pipe(pluck('urls', 'full'));
  }
}
