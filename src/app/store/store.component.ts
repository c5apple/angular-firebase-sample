import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
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
    this.items = this.db.collection<Item>('items')
      .snapshotChanges()
      .pipe(map(actions => actions.map(action => {
        return new Item(action.payload.doc.id, action.payload.doc.data());
      })));
  }

  add(item: Item) {
    this.db.collection<Item>('items').add(item.deserialize());
    this.item = new Item();
  }

  select(item: Item) {
    this.item = item.clone();
  }

  update(item: Item) {
    this.db.collection<Item>('items').doc(item.id).update(item.deserialize());
  }
}
