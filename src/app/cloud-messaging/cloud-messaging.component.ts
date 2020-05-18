import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-cloud-messaging',
  templateUrl: './cloud-messaging.component.html',
  styleUrls: ['./cloud-messaging.component.scss']
})
export class CloudMessagingComponent implements OnInit {

  token: string;

  constructor(private messaging: AngularFireMessaging) { }

  ngOnInit() {
  }

  requestPermission() {
    this.messaging.requestToken
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);
          this.token = token;
        },
        (error) => { console.error(error); },
      );
  }

  deleteToken() {
    this.messaging.getToken
      .pipe(mergeMap(token => this.messaging.deleteToken(token)))
      .subscribe(
        (token) => {
          console.log('Token deleted!');
          this.token = undefined;
        },
      );
  }
}
