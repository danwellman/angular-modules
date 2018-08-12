import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Group } from './group-item.interface';
import { GroupsService } from '../groups.service';

@Injectable()
export class GroupItemResolver implements Resolve<Observable<Group>> {
  constructor(private readonly groupsService: GroupsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Group> {
    return this.groupsService.getGroupItem(parseInt(route.paramMap.get('groupId'), 10));
  }
}
