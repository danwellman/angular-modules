import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, of } from 'rxjs';

import { Group } from './groups/group-item/group-item.interface';
import { GroupsList } from './groups/groups-list/groups-list.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private groupsList: Group[];

  constructor(private readonly http: HttpClient) { }

  getGroupsList(): Observable<Group[]> {
    return new Observable((observer: Observer<Group[]>) => {
      if (this.groupsList) {
        return this.handleListObserver(observer);
      }

      this.http.get<GroupsList>(environment.endpoints.groupsList).subscribe((response: GroupsList) => {
        this.groupsList = response.groups;
        return this.handleListObserver(observer);
      });
    });
  }

  getGroupItem(id: number): Observable<Group> {
    return new Observable((observer: Observer<Group>) => {
      if (this.groupsList) {
        return this.handleItemObserver(observer, id);
      }

      this.getGroupsList().subscribe(() => {
        return this.handleItemObserver(observer, id);
      });
    });
  }

  private handleListObserver(observer: Observer<Group[]>): void {
    observer.next(this.groupsList);
    return observer.complete();
  }

  private handleItemObserver(observer: Observer<Group>, id: number): void {
    observer.next(this.filterById(id));
    return observer.complete();
  }

  private filterById(id: number): Group {
    return this.groupsList.filter((group: Group) => id === group.id)[0];
  }
}
