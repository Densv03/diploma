import { Component } from '@angular/core';
import { LabelService } from "../../../../service/label.service";
import { ActivatedRoute } from "@angular/router";
import { Template } from "../../../../models/template.model";
import { MatDialog } from "@angular/material/dialog";
import { EditAndSubmitDialogComponent } from "../edit-and-submit-dialog/edit-and-submit-dialog.component";
import { MailService } from "../../../../service/mail.service";
import { HotToastService } from "@ngneat/hot-toast";

@Component({
  selector: 'app-label-details',
  templateUrl: './label-details.component.html',
  styleUrls: ['./label-details.component.scss']
})
export class LabelDetailsComponent {
  private readonly labelName = this.route.snapshot.params['labelName'];
  public label$ = this.labelService.getLettersByLabelName$(this.labelName);

  constructor(private labelService: LabelService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private mailService: MailService,
              private hotToastService: HotToastService) {
  }

  public sendMessage(): void {}

  public openEditAndSubmitDialog(usedTemplate: Template): void {
    console.log(usedTemplate);
    this.dialog.open(EditAndSubmitDialogComponent, {
      data: usedTemplate,
      minWidth: 800,
      minHeight: 600
    })
      .afterClosed()
      .subscribe(({pushEmailRequests, template, groupName, from}) => {
        if (!pushEmailRequests || !template || !groupName || !from) {
          return;
        }

        const {title, usingPlaceHolder} = usedTemplate;

        this.mailService.sendMail({pushEmailRequests, template, groupName, from, title, usingPlaceHolder})
          .pipe(
            this.hotToastService.observe({
              loading: 'Sending...',
              success: 'Sent successfully!',
              error: 'Something went wrong. Please try again.'
            })
          )
          .subscribe();
    });
  }
}
