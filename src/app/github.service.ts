import { Injectable } from '@angular/core';
import 'rxjs';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: Http) { }

    getShit(username){
      return this._http.get(`https://api.github.com/users/${username}`).map(data=>data.json()).toPromise()
    }

}
