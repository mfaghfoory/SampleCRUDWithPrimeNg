import { Component, OnInit } from '@angular/core';
import { InmemoryDataServiceService } from 'src/app/services/inmemory-data-service.service';
import { Person } from 'src/app/models/person';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  cols: any[];
  data = new Array<Person>();
  selected: Person;
  selecteds: Person[];
  items: MenuItem[];
  constructor(
    private service: InmemoryDataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID', filterMatchMode: 'contains' },
      { field: 'name', header: 'Name', filterMatchMode: 'contains' },
      { field: 'tel', header: 'Tel', filterMatchMode: 'contains' },
      { field: 'address', header: 'Address' }
    ];
    this.items = [
      {
        label: 'View',
        icon: 'pi pi-search',
        command: event => this.view(this.selected)
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: event => this.delete(this.selected)
      }
    ];

    this.data = this.service.getData();
  }

  delete(item: Person) {
    this.service.delete(item);
    this.data = this.service.getData();
  }

  view(item: Person) {
    this.router.navigate(['edit', item.id]);
  }

  createNew() {
    this.router.navigate(['new']);
  }
}
