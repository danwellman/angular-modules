import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LegalComponent } from './legal/legal.component';

export const routes: Routes = [
  {
    path: 'feed-list',
    loadChildren: './feed/feed.module#FeedModule'
  },
  {
    path: 'groups-list',
    loadChildren: './groups/groups.module#GroupsModule'
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
