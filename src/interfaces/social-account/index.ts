import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SocialAccountInterface {
  id?: string;
  platform: string;
  username: string;
  password: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SocialAccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  platform?: string;
  username?: string;
  password?: string;
  user_id?: string;
}
