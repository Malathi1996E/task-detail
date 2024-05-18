// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectimageComponent } from './selectimage/selectimage.component';
import { AddTOcardComponent } from './add-tocard/add-tocard.component';

const routes: Routes = [
  { path: "selectimage", component: SelectimageComponent },
  { path: "", component: AddTOcardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
