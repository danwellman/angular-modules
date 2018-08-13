import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Group } from './group-item.interface';
import { User, UsersApiResponse } from '../../user.interface';
import { UserService } from '../../user.service';
import { DateService } from '../../utils/date.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupItemComponent implements OnInit {
  @Input() group: Group;

  public formattedCreationDate: string;
  public loading = true;
  public inList = true;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly dateService: DateService
  ) { }

  ngOnInit(): void {
    if (!this.group) {
      this.group = this.route.snapshot.data.group;
      this.inList = false;
    }
    this.formattedCreationDate = this.dateService.dateFromUnixTimestamp(this.group.created);
    this.userService.getUsers().subscribe((response: UsersApiResponse) => {
      this.group.members.map((value: number, index: number) => {
        response.users.forEach((user: User) => {
          if (user.userId === value) {
            this.group.members.splice(index, 1, user);
          }
        });
      });
      this.loading = false;
    });
  }

}
