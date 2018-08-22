import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FeedList } from './feed-list.interface';
import { FeedService } from '../feed.service';
import { FeedItem } from '../feed-item/feed-item.interface';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedListComponent implements OnInit {
  public feed: FeedItem[];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.getFeedItems();

    console.log(this.feedService['test']);
  }

  private getFeedItems() {
    this.feedService.getFeedList().subscribe((feedList: FeedItem[]) => {
      this.feed = feedList;
    });
  }

}
