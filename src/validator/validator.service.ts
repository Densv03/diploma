import { Injectable } from '@angular/core';
import { LabelService } from "../app/main/service/label.service";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { catchError, delay, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private labelService: LabelService) { }

  uniqueLabel(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ labelExist: boolean } | null> => {
      if (!control.value) {
        return of(null);
      }

      return this.labelService.isLabelNameAvailable$(control.value).pipe(
        delay(200),
        map(data => {
          return data.isAvailable ? null : { labelExist: true };
        }),
        catchError(() => {
          return of(null);
        })
      );
    };
  }
}
