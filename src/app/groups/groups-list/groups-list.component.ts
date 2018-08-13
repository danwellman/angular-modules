import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Group } from '../group-item/group-item.interface';
import { GroupsList } from './groups-list.interface';
import { GroupsService } from '../../groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupsListComponent implements OnInit {
  public groups: Group[];

  constructor(private readonly groupsService: GroupsService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  private getGroups(): void {
    this.groupsService.getGroupsList().subscribe((groupsList: Group[]) => {
      this.groups = groupsList;
    });
  }
}
