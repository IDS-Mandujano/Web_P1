import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServicesService {

  private url_basePosts : string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private _http:HttpClient) { }
}
