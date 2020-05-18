import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-cloud-messaging',
  templateUrl: './cloud-messaging.component.html',
  styleUrls: ['./cloud-messaging.component.scss']
})
export class CloudMessagingComponent implements OnInit {

  constructor(private messaging: AngularFireMessaging) { }

  ngOnInit() {
  }

  requestPermission() {
    this.messaging.requestToken
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }
}
