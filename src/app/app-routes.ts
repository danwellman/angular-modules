import { Routes } from '@angular/router';

import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { FeedItemResolver } from './feed-item/feed-item.resolver';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { GroupItemResolver } from './group-item/group-item.resolver';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LegalComponent } from './legal/legal.component';

export const routes: Routes = [
  {
    path: 'feed-list',
    component: FeedListComponent
  },
  {
    path: 'feed-list/:itemId',
    component: FeedItemComponent,
    resolve: { item: FeedItemResolver }
  },
  {
    path: 'groups-list',
    component: GroupsListComponent
  },
  {
    path: 'groups-list/:groupId',
    component: GroupItemComponent,
    resolve: { group: GroupItemResolver }
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'legal',
    component: LegalComponent
  },
  {
    path: '',
    redirectTo: '/feed-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
