import { Component } from '@angular/core';
import {GithubService} from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'githubapi2';
  score: number = null;
  newUser: Object = {};
  output: Object = {}
  imgSrc: string = '../assets/images/bojack.jpg';
  name: string;
  location: string;

  onSubmit(newUser){
    // console.log(newUser);
    // console.log('shit works');
    return this._api.getShit(newUser.username)
    .then(output=>{console.log(output)
      this.score = output.public_repos;
      this.name = output.login;
      this.location = output.location;
      this.imgSrc = output.avatar_url;
    ;})
    .catch(err=>{console.log(err);})
  }

  constructor(private _api:GithubService){}
}

