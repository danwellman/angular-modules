import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, of } from 'rxjs';

import { FeedItem } from './feed-item/feed-item.interface';
import { FeedList } from './feed-list/feed-list.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private feedList: FeedItem[];

  constructor(private readonly http: HttpClient) { }

  getFeedList(): Observable<FeedItem[]> {
    return new Observable((observer: Observer<FeedItem[]>) => {
      if (this.feedList) {
        return this.handleListObserver(observer);
      }

      this.http.get<FeedList>(environment.endpoints.feedList).subscribe((response: FeedList) => {
        this.feedList = response.feedItems;
        return this.handleListObserver(observer);
      });
    });
  }

  getFeedItem(id: number): Observable<FeedItem> {
    return new Observable((observer: Observer<FeedItem>) => {
      if (this.feedList) {
        return this.handleItemObserver(observer, id);
      }

      this.getFeedList().subscribe(() => {
        return this.handleItemObserver(observer, id);
      });
    });
  }

  private handleListObserver(observer: Observer<FeedItem[]>): void {
    observer.next(this.feedList);
    return observer.complete();
  }

  private handleItemObserver(observer: Observer<FeedItem>, id: number): void {
    observer.next(this.filterById(id));
    return observer.complete();
  }

  private filterById(id: number): FeedItem {
    return this.feedList.filter((item: FeedItem) => id === item.id)[0];
  }
}
