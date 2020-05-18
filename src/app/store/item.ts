export class Item {
  id?: string;
  name: string;
  age: number;

  constructor(id?: string, item?: Item) {
    this.id = id;
    if (item) {
      this.name = item.name;
      this.age = item.age;
    }
  }

  deserialize() {
    const obj = Object.assign({}, this);
    delete obj.id;
    return obj;
  }

  clone() {
    return new Item(this.id, this);
  }
}
