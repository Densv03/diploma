import { Component, OnInit } from '@angular/core';
import { HotToastService } from "@ngneat/hot-toast";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LetterService } from "../../service/letter.service";
import { BehaviorSubject, map } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { CreateLetter } from "../../models/create-letter.model";

@Component({
  selector: 'app-create-letter',
  templateUrl: './create-letter.component.html',
  styleUrls: ['./create-letter.component.scss']
})
export class CreateLetterComponent implements OnInit {
  constructor(private h: HotToastService,
              private letterService: LetterService) {
  }

  public form: FormGroup = new FormGroup<{ letter: FormControl<string | null>, amount: FormControl<string | null> }>({
    letter: new FormControl<string | null>(null, [Validators.required]),
    amount: new FormControl<string | null>(null, [Validators.required]),
  });

  private generatedLettersSubject = new BehaviorSubject<string[]>([]);
  public generatedLetters$ = this.generatedLettersSubject.asObservable();

  ngOnInit(): void {
  }

  public amountDropdown = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
  ];

  public createLetter(): void {
    console.log('create letter')
    if (this.form.invalid) {
      this.h.error('Form invalid');
      return;
    }

    const {amount, letter} = this.form.value as CreateLetter;
    if (isNaN(+amount)) {
      this.h.error('Something with amount happen. Please reload this page and try again.');
      return;
    }
    this.letterService.createLetter({letter, amount: +amount}).pipe(
      this.h.observe({
        loading: `Generating ${amount} ${+amount === 1 ? 'letter' : 'letters'}...`,
        success: 'Letter generated successfully',
        error: 'Error generating letter'
      }),
      map(event => {
        if (event instanceof HttpResponse) {
          return event.body;
        } else {
          return [];
        }
      })
    ).subscribe(res => {
      this.generatedLettersSubject.next(res ?? []);
    })
  }
}
