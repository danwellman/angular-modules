import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { FeedService } from './feed/feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private readonly userService: UserService,
    private feedService: FeedService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe();

    this.feedService['test'] = 'Instance test';
  }
}
