import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LettersLogComponent } from "./layout/letters-log.component";
import { LabelDetailsComponent } from "./components/label-details/label-details.component";

const routes: Routes = [
  {
    path: '',
    component: LettersLogComponent
  },
  {
    path: ':labelName',
    component: LabelDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelsListRoutingModule { }
