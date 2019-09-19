import request from '../utils/request';

export function globalSearch(params) {
  return request(
    `/api/Search?Name=${params.Name}&PageIndex=${params.PageIndex}`,
  );
}
