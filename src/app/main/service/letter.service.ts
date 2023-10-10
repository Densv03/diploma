import { Injectable } from '@angular/core';
import { ApiService } from "../../../service/api.service";
import { Observable } from "rxjs";
import { HttpEvent } from "@angular/common/http";
import { CreateLetter } from "../models/create-letter.model";

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  constructor(private apiService: ApiService) { }
  public createLetter(data: CreateLetter): Observable<HttpEvent<string[]>> {
    return this.apiService.post<string[]>('auth/generate-letter', data);
  }
}
