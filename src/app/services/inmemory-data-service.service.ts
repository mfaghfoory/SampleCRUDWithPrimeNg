import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class InmemoryDataServiceService {
  private data = new Array<Person>();
  constructor() {
    console.warn('data initializing');
    for (let index = 1; index <= 5; index++) {
      this.data.push(
        new Person(
          index,
          `user - ${index}`,
          index.toString().padStart(10, '1'),
          `address of user - ${index}`
        )
      );
    }
  }

  getData() {
    return this.data;
  }

  findById(id: number) {
    const obj = this.data.filter(x => x.id == id)[0];
    return obj;
  }

  delete(item: Person) {
    this.data = this.data.filter(x => x.id != item.id);
  }

  getNew() {
    const id = Math.max(...this.data.map(x => x.id));
    return new Person(id + 1, '', '', '');
  }

  create(item: Person) {
    this.data.push(item);
  }

  update(item: Person) {
    let obj = this.data.filter(x => x.id == item.id)[0];
    obj = item;
  }
}
