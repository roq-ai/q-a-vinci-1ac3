import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VirtualNumberInterface {
  id?: string;
  number: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VirtualNumberGetQueryInterface extends GetQueryInterface {
  id?: string;
  number?: string;
  user_id?: string;
}
