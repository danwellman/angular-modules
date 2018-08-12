import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app-routes';

// Components
import { AppComponent } from './app.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupItemComponent } from './group-item/group-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { FeedService } from './feed.service';
import { FeedItemResolver } from './feed-item/feed-item.resolver';
import { GroupsService } from './groups.service';
import { GroupItemResolver } from './group-item/group-item.resolver';
import { UserService } from './user.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LegalComponent } from './legal/legal.component';
import { DateService } from './utils/date.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedItemComponent,
    GroupsListComponent,
    GroupItemComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    LegalComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    FeedService,
    FeedItemResolver,
    GroupsService,
    GroupItemResolver,
    UserService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
