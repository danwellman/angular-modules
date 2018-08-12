import { User } from '../user.interface';

export interface Group {
  id: number;
  name: string;
  headerImg: string;
  description: string;
  members: Array<number | User>;
  created: number;
  content: string;
}
