import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsListRoutingModule } from './labels-list-routing.module';
import { LettersLogComponent } from "./layout/letters-log.component";
import { LabelDetailsComponent } from './components/label-details/label-details.component';


@NgModule({
  declarations: [LettersLogComponent, LabelDetailsComponent],
  imports: [
    CommonModule,
    LabelsListRoutingModule
  ]
})
export class LabelsListModule { }
