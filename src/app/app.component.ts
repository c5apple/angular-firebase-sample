import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection('items').valueChanges();
  }
}
