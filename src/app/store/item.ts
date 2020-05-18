export class Item {
  name: string;
  age: number;

  deserialize() {
    return Object.assign({}, this);
  }
}
