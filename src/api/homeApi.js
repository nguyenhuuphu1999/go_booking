import axiosClient from './axiosClient'

const homeApi = {
  getAll: params => {
    const url = '/home';
    return axiosClient.get(url, { params });
  },

  get: id => { 
    const url = `/home/${id}`;
    return axiosClient.get(url);
  },
}

export default homeApi;
