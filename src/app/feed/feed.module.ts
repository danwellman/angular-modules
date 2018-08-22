import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { FeedItemResolver } from './feed-item/feed-item.resolver';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule
  ],
  declarations: [
    FeedComponent,
    FeedListComponent,
    FeedItemComponent,
    FeedListComponent
  ],
  providers: [
    FeedItemResolver
  ]
})
export class FeedModule { }
