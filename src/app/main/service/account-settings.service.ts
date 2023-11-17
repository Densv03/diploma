import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "../../../service/api.service";

@Injectable({
  providedIn: 'root'
})
export class AccountSettingsService {

  constructor(private apiSerive: ApiService) { }

  public deleteAccount(): Observable<any> {
    return this.apiSerive.delete('user/delete')
  }

  public changePassword(newPassword: string): Observable<any> {
    return this.apiSerive.put('user/change-password', {newPassword})
  }
}
