import { Component, Inject, OnInit } from '@angular/core';
import { Template } from "../../../../models/template.model";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ReceiversService } from "../../../../service/receivers.service";
import { Group } from "../../../../models/group.model";
import { HotToastService } from "@ngneat/hot-toast";

@Component({
  selector: 'app-edit-and-submit-dialog',
  templateUrl: './edit-and-submit-dialog.component.html',
  styleUrls: ['./edit-and-submit-dialog.component.scss']
})
export class EditAndSubmitDialogComponent implements OnInit {
  public templateFormGroup = new FormGroup({
    template: new FormControl('', Validators.required),
    receiversGroup: new FormControl(null, Validators.required),
    from: new FormControl('', Validators.required),
  });

  public receiversGroups$ = this.receiversService.getAllReceiverGroups();

  public receiversGroups: Group[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Template,
              private dialogRef: MatDialogRef<EditAndSubmitDialogComponent>,
              private receiversService: ReceiversService,
              private hotToastService: HotToastService) {
  }

  public ngOnInit(): void {
    this.receiversGroups$.subscribe((groups: Group[]) => {
      this.receiversGroups = groups;
    });

    this.templateFormGroup.get('template')?.setValue(this.data.template);
  }

  public submit(): void {
    if (this.templateFormGroup.invalid) {
      return;
    }

    const groupName: null | undefined | Group = this.templateFormGroup.get('receiversGroup')?.value;

    if (!groupName) {
      this.hotToastService.error('Something went wrong. Please try again.');
      this.dialogRef.close();
      return;
    }

    const pushEmailRequests = this.receiversGroups.find(group => group.groupName === groupName)?.emailReceiverResponses;
    const template = this.templateFormGroup.get('template')?.value;
    const from = this.templateFormGroup.get('from')?.value;

    this.dialogRef.close({pushEmailRequests, template, groupName, from});
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
