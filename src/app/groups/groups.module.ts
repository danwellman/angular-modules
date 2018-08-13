import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { GroupItemResolver } from './group-item/group-item.resolver';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [
    GroupsComponent,
    GroupsListComponent,
    GroupItemComponent
  ],
  providers: [
    GroupItemResolver
  ]
})
export class GroupsModule { }
