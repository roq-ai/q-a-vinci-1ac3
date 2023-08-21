import { EducationalContentInterface } from 'interfaces/educational-content';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AgencyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  educational_content?: EducationalContentInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    educational_content?: number;
    team_member?: number;
  };
}

export interface AgencyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
