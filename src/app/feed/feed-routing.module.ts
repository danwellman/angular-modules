import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { FeedItemResolver } from './feed-item/feed-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    children: [
      {
        path: '',
        component: FeedListComponent
      },
      {
        path: ':itemId',
        component: FeedItemComponent,
        resolve: { item: FeedItemResolver }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
