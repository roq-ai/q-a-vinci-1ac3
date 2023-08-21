import { AgencyInterface } from 'interfaces/agency';
import { GetQueryInterface } from 'interfaces';

export interface EducationalContentInterface {
  id?: string;
  title: string;
  content: string;
  agency_id: string;
  created_at?: any;
  updated_at?: any;

  agency?: AgencyInterface;
  _count?: {};
}

export interface EducationalContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  agency_id?: string;
}
