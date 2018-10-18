import { Friend } from './Friend';

export interface User {
  id?: string;
  username: string;
  email: string;
  friendsArray?: Friend[];
}
