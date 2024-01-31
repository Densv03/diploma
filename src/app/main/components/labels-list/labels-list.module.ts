import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsListRoutingModule } from './labels-list-routing.module';
import { LettersLogComponent } from "./layout/letters-log.component";
import { LabelDetailsComponent } from './components/label-details/label-details.component';
import { EditAndSubmitDialogComponent } from './components/edit-and-submit-dialog/edit-and-submit-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [LettersLogComponent, LabelDetailsComponent, EditAndSubmitDialogComponent],
    imports: [
        CommonModule,
        LabelsListRoutingModule,
        ReactiveFormsModule,
        NgSelectModule,
        MatInputModule
    ]
})
export class LabelsListModule { }
