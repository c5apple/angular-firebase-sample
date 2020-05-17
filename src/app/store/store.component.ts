import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection('items').valueChanges();
  }

}
