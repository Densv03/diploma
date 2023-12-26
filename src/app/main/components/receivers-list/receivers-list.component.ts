import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Observable } from "rxjs";
import { HotToastService } from "@ngneat/hot-toast";

import { ReceiversService } from "../../service/receivers.service";
import { CreateGroupDialogComponent } from "./components/create-group-dialog/create-group-dialog.component";
import { Group } from "../../models/group.model";

@Component({
  selector: 'app-receivers-list',
  templateUrl: './receivers-list.component.html',
  styleUrls: ['./receivers-list.component.scss']
})
export class ReceiversListComponent {
  public receiverGroups$: Observable<Group[]> = this.receiversService.getAllReceiverGroups();
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  public expandedGroups: Set<string> = new Set();

  constructor(private receiversService: ReceiversService,
              private hotToastService: HotToastService,
              private dialog: MatDialog) {
  }

  public openCreateGroupDialog(): void {
    this.dialog.open(CreateGroupDialogComponent, {
      minWidth: 600,
    })
      .afterClosed()
      .subscribe(groupName => {
        if (groupName) {
          this.createGroup(groupName);
        }
      });
  }

  public removeEmail(groupName: string, email: string): void {
    this.receiversService.removeEmailFromGroup(groupName, email).pipe(
      this.hotToastService.observe({
        success: 'Email removed successfully',
        error: 'Error removing email'
      }),
    ).subscribe(() => {
      this.refreshGroups();
    });
  }

  public addEmail(groupName: string, email: string | null): void {
    if (!email) {
      return;
    }
    this.receiversService.addEmailToGroup(groupName, email).pipe(
      this.hotToastService.observe({
        success: 'Email added successfully',
        error: 'Error adding email'
      }),
    ).subscribe(() => {
      this.refreshGroups();
      this.emailFormControl.reset();
    });
  }

  public panelOpened(groupName: string): void {
    this.expandedGroups.add(groupName);
  }

  public panelClosed(groupName: string): void {
    this.expandedGroups.delete(groupName);
  }

  private refreshGroups(): void {
    this.receiverGroups$ = this.receiversService.getAllReceiverGroups();
  }

  private createGroup(groupName: string): void {
    this.receiversService.createGroup(groupName).pipe(
      this.hotToastService.observe({
        success: 'Group created successfully',
        error: 'Unexpected error occurred'
      }),
    ).subscribe(() => {
      this.refreshGroups();
    });
  }
}
