import axios from 'axios';
import queryString from 'query-string';
import { VirtualNumberInterface, VirtualNumberGetQueryInterface } from 'interfaces/virtual-number';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVirtualNumbers = async (
  query?: VirtualNumberGetQueryInterface,
): Promise<PaginatedInterface<VirtualNumberInterface>> => {
  const response = await axios.get('/api/virtual-numbers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVirtualNumber = async (virtualNumber: VirtualNumberInterface) => {
  const response = await axios.post('/api/virtual-numbers', virtualNumber);
  return response.data;
};

export const updateVirtualNumberById = async (id: string, virtualNumber: VirtualNumberInterface) => {
  const response = await axios.put(`/api/virtual-numbers/${id}`, virtualNumber);
  return response.data;
};

export const getVirtualNumberById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/virtual-numbers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVirtualNumberById = async (id: string) => {
  const response = await axios.delete(`/api/virtual-numbers/${id}`);
  return response.data;
};
