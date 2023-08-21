import { UserInterface } from 'interfaces/user';
import { AgencyInterface } from 'interfaces/agency';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id: string;
  agency_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  agency?: AgencyInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  agency_id?: string;
}
