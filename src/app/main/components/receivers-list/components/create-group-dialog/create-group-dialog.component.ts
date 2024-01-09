import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.scss']
})
export class CreateGroupDialogComponent {
  public groupName: string = ''
  constructor(private dialogRef: MatDialogRef<CreateGroupDialogComponent>,) {
  }

  public createGroup(): void {
    if (!this.groupName) {
      return;
    }
    this.dialogRef.close(this.groupName);
  }
}
