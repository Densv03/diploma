import { Component, OnInit } from '@angular/core';
import { HotToastService } from "@ngneat/hot-toast";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LetterService } from "../../service/letter.service";
import { BehaviorSubject, map } from "rxjs";
import { ValidatorService } from "../../../../validator/validator.service";
import { ApiService } from "../../../../service/api.service";

@Component({
  selector: 'app-create-letter',
  templateUrl: './create-letter.component.html',
  styleUrls: ['./create-letter.component.scss']
})
export class CreateLetterComponent {
  constructor(private h: HotToastService,
              private letterService: LetterService,
              private validatorService: ValidatorService,
              private apiService: ApiService) {
  }

  public form: FormGroup = new FormGroup({
    generateLabelRequest: this.getGenerateLabelFormGroup(),
    generateMailDescriptionRequest: this.getGenerateMailDescriptionFormGroup(),
    mailConfigurationRequest: this.getMailConfigFormGroup(),
  });

  private generatedLettersSource = new BehaviorSubject<string>('');
  public generatedLetters$ = this.generatedLettersSource.asObservable();

  public generateLabelRequestGroup = this.form.get('generateLabelRequest') as FormGroup;

  public amountDropdown = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
  ];

  public styleDropdown = [
    {value: 'Academic', label: 'Academic'},
    {value: 'Business', label: 'Business'},
    {value: 'Literary', label: 'Literary'},
    {value: 'Journalistic', label: 'Journalistic'},
    {value: 'Conversational', label: 'Conversational'},

    ]

  public createLetter(): void {
    if (this.form.invalid) {
      this.h.error('Form invalid');
      return;
    }

    const amount = this.form.get('mailConfigurationRequest')?.get('templateCount')?.value;
    this.letterService.createLetter(this.form.value).pipe(
      this.h.observe({
        loading: `Generating ${amount} ${+amount === 1 ? 'letter' : 'letters'}...`,
        success: 'Letter generated successfully',
        error: 'Error generating letter'
      })).subscribe(res => {
      this.generatedLettersSource.next(res as any as string);
    });
  }

  private getGenerateLabelFormGroup(): FormGroup {
    return new FormGroup<{ name: FormControl<string | null>, description: FormControl<string | null> }>({
      name: new FormControl<string | null>(null, [Validators.required], [this.validatorService.uniqueLabel()]),
      description: new FormControl<string | null>(null, [Validators.required]),
    });
  }

  private getGenerateMailDescriptionFormGroup(): FormGroup {
    return new FormGroup<{ title: FormControl<string | null>, body: FormControl<string | null> }>({
      title: new FormControl<string | null>(null, [Validators.required]),
      body: new FormControl<string | null>(null, [Validators.required]),
    });
  }

  private getMailConfigFormGroup(): FormGroup {
    return new FormGroup<{
      from: FormControl<string | null>,
      style: FormControl<string | null>,
      usingPlaceHolder: FormControl<boolean | null>,
      templateCount: FormControl<number | null>,
      sentenceCount: FormControl<number | null>
    }>({
      from: new FormControl<string | null>(null, [Validators.required]),
      style: new FormControl<string | null>(null, [Validators.required]),
      usingPlaceHolder: new FormControl<boolean>(false),
      templateCount: new FormControl<number | null>(null),
      sentenceCount: new FormControl<number>(0),
    });
  }
}
