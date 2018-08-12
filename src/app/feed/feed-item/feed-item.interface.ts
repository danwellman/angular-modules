import { User } from '../../user.interface';

export interface FeedItem {
  id: number;
  intro: string;
  posted: number;
  title: string;
  user?: User;
  userId: number;
  content: string;
}
