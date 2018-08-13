import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { GroupItemResolver } from './group-item/group-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    children: [
      {
        path: '',
        component: GroupsListComponent
      },
      {
        path: ':groupId',
        component: GroupItemComponent,
        resolve: { group: GroupItemResolver }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
