import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "../../../service/api.service";

@Injectable({
  providedIn: 'root'
})
export class AccountSettingsService {

  constructor(private apiService: ApiService) { }

  public deleteAccount(): Observable<any> {
    return this.apiService.delete('user/delete')
  }

  public changePassword(newPassword: string): Observable<any> {
    return this.apiService.put('user/change-password', {newPassword})
  }
}
