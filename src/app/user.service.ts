import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, of } from 'rxjs';

import { User, UsersApiResponse } from './user.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UsersApiResponse> {
    return new Observable(observer => {
      if (this.users) {
        return this.handleObserver(observer);
      }

      this.http.get<UsersApiResponse>(environment.endpoints.users).subscribe((response: UsersApiResponse) => {
        this.users = response.users;
        return this.handleObserver(observer);
      });
    });
  }

  private handleObserver(observer: Observer<UsersApiResponse>): void {
    observer.next({ users: this.users });
    return observer.complete();
  }
}
