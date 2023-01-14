import { Component } from '@angular/core';
const sign = require('jwt-encode');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public jwt: string = "";
  public secret: string = "";
  public payloadJson: string = "";
  public audience: string = "";


  public getToken() {
    this.jwt = sign(this.payloadJson, this.secret);
  }

  public onKeySecret(event: any) { // without type info
    this.secret += event.target.value + ' | ';
  }

  public onKeyPayload(event: any) { // without type info
    this.payloadJson += event.target.value + ' | ';
  }

  public onKeyAudience(event: any) { // without type info
    this.audience += event.target.value + ' | ';
  }
}
