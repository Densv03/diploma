import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsListRoutingModule } from './labels-list-routing.module';
import { LettersLogComponent } from "./layout/letters-log.component";
import { LabelDetailsComponent } from './components/label-details/label-details.component';
import { EditAndSubmitDialogComponent } from './components/edit-and-submit-dialog/edit-and-submit-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";


@NgModule({
  declarations: [LettersLogComponent, LabelDetailsComponent, EditAndSubmitDialogComponent],
  imports: [
    CommonModule,
    LabelsListRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class LabelsListModule { }
