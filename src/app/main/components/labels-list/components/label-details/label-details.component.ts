import { Component } from '@angular/core';
import { LabelService } from "../../../../service/label.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-label-details',
  templateUrl: './label-details.component.html',
  styleUrls: ['./label-details.component.scss']
})
export class LabelDetailsComponent {
  private readonly labelName = this.route.snapshot.params['labelName'];
  public label$ = this.labelService.getLettersByLabelName$(this.labelName);

  constructor(private labelService: LabelService,
              private route: ActivatedRoute) {
  }
}
