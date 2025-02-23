import { Injectable } from '@angular/core';
import { ApiService } from "../../../service/api.service";
import {Observable, of} from "rxjs";
import { Group } from "../models/group.model";
import {RECEIVERS_MOCK} from "../mocks/RECEIVERS_MOCK";

@Injectable({
  providedIn: 'root'
})
export class ReceiversService {

  constructor(private apiService: ApiService) { }

  public createGroup(groupName: string): Observable<any> {
    return this.apiService.post(`groups/${groupName}`, {});
  }

  public addEmailToGroup(groupName: string, email: string): Observable<any> {
    return this.apiService.post('groups', {groupName, email});
  }

  public removeEmailFromGroup(groupName: string, email: string): Observable<any> {
    return this.apiService.delete('groups', {groupName, email});
  }

  public getAllReceiverGroups(): Observable<Group[]> {
    return this.apiService.get('groups/all');
    // return of(RECEIVERS_MOCK)
  }
}
