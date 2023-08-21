import axios from 'axios';
import queryString from 'query-string';
import { EducationalContentInterface, EducationalContentGetQueryInterface } from 'interfaces/educational-content';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEducationalContents = async (
  query?: EducationalContentGetQueryInterface,
): Promise<PaginatedInterface<EducationalContentInterface>> => {
  const response = await axios.get('/api/educational-contents', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEducationalContent = async (educationalContent: EducationalContentInterface) => {
  const response = await axios.post('/api/educational-contents', educationalContent);
  return response.data;
};

export const updateEducationalContentById = async (id: string, educationalContent: EducationalContentInterface) => {
  const response = await axios.put(`/api/educational-contents/${id}`, educationalContent);
  return response.data;
};

export const getEducationalContentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/educational-contents/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEducationalContentById = async (id: string) => {
  const response = await axios.delete(`/api/educational-contents/${id}`);
  return response.data;
};
