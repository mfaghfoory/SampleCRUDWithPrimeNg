import { Component, OnInit } from '@angular/core';
import { InmemoryDataServiceService } from 'src/app/services/inmemory-data-service.service';
import { Person } from 'src/app/models/person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  constructor(
    private service: InmemoryDataServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  editMode = false;
  model: Person = this.service.getNew();
  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p.id) {
        this.editMode = true;
        this.model = this.service.findById(p.id);
      }
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.service.update(this.model);
    } else {
      this.service.create(this.model);
    }
    this.router.navigate(['']);
  }
}
