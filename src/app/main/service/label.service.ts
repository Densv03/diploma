import { Injectable } from '@angular/core';
import { ApiService } from "../../../service/api.service";
import {Observable, of} from "rxjs";
import { Label } from "../models/Label.model";
import {LABELS_MOCK} from "../mocks/LABELS_MOCK";
import {LABEL_MOCK} from "../mocks/LABEL_MOCK";

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private apiService: ApiService) { }

  public getAllLabels$(): Observable<Label[]> {
    return this.apiService.get<Label[]>('label');
    // return of(LABELS_MOCK);
  }

  public isLabelNameAvailable$(labelName: string): Observable<{isAvailable: boolean}> {
    return this.apiService.get<{isAvailable: boolean}>(`label/${labelName}`);
  }

  public getLettersByLabelName$(labelName: string): Observable<Label> {
    return this.apiService.get<Label>(`label/letterLog/${labelName}`);
    // return of(LABEL_MOCK)
  }
}
