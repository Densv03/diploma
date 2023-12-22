import { Injectable } from '@angular/core';
import { ApiService } from "../../../service/api.service";
import { Observable } from "rxjs";
import { Label } from "../models/Label.model";

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private apiService: ApiService) { }

  public getAllLabels$(): Observable<Label[]> {
    return this.apiService.get<Label[]>('label');
  }

  public isLabelNameAvailable$(labelName: string): Observable<{isAvailable: boolean}> {
    return this.apiService.get<{isAvailable: boolean}>(`label/${labelName}`);
  }

  public getLettersByLabelName$(labelName: string): Observable<Label> {
    return this.apiService.get<Label>(`label/letterLog/${labelName}`);
  }
}
