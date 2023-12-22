import { Component, OnInit } from '@angular/core';
import { LabelService } from "../../../service/label.service";

@Component({
  selector: 'app-labels-list',
  templateUrl: './letters-log.component.html',
  styleUrls: ['./letters-log.component.scss']
})
export class LettersLogComponent implements OnInit {

  public labels$ = this.labelService.getAllLabels$();

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
  }

}
