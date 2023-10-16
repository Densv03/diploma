import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter-block',
  templateUrl: './letter-block.component.html',
  styleUrls: ['./letter-block.component.scss']
})
export class LetterBlockComponent {
  @Input() letter: string = '';
  @Input() link?: string;
}
