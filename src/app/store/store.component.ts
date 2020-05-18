import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from './item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  items: Observable<Item[]>;
  item: Item = new Item();

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection<Item>('items').valueChanges();
  }

  add(item: Item) {
    this.db.collection('items').add(item.deserialize());
  }
}
