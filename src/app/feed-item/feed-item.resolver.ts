import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { FeedItem } from './feed-item.interface';
import { FeedService } from '../feed.service';

@Injectable()
export class FeedItemResolver implements Resolve<Observable<FeedItem>> {
  constructor(private readonly feedService: FeedService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<FeedItem> {
    return this.feedService.getFeedItem(parseInt(route.paramMap.get('itemId'), 10));
  }
}
