import { Injectable } from '@angular/core';
import { ApiService } from "../../../service/api.service";
import { Observable } from "rxjs";
import { SendMailRequest } from "../models/send-mail-request.model";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private apiService: ApiService) { }

  public sendMail(data: SendMailRequest): Observable<any> {
    return this.apiService.post('push', data);
  }
}
