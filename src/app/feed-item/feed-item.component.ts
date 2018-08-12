import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FeedItem } from './feed-item.interface';
import { User, UsersApiResponse } from '../user.interface';
import { UserService } from '../user.service';
import { DateService } from '../utils/date.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedItemComponent implements OnInit {
  @Input() item: FeedItem;

  public formattedPostDate: string;
  public loading = true;
  public inList = true;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly dateService: DateService
  ) { }

  ngOnInit(): void {
    if (!this.item) {
      this.item = this.route.snapshot.data.item;
      this.inList = false;
    }
    this.formattedPostDate = this.dateService.dateFromUnixTimestamp(this.item.posted);
    this.userService.getUsers().subscribe((response: UsersApiResponse) => {
      this.item.user = response.users.filter((user: User) => user.userId === this.item.userId)[0];
      this.loading = false;
    });
  }
}
