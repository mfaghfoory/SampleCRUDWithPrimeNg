import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDataComponent } from './pages/view-data/view-data.component';
import { EditDataComponent } from './pages/edit-data/edit-data.component';

const routes: Routes = [
  { path: '', component: ViewDataComponent },
  { path: 'new', component: EditDataComponent },
  { path: 'edit/:id', component: EditDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
