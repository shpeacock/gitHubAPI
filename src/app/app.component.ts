import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GithubService} from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'githubapi2';
  newUser: Object = {};
  score: number = 0;
  username: "";

  onSubmit(newUser){
    // console.log(newUser);
    // console.log('shit works');
    return this._api.getShit(newUser.username)
    .then(output=>{console.log(output)
    ;})
    .catch(err=>{console.log(err);})
  }

  constructor(private _api:GithubService){}
}

