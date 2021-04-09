import axiosClient from './axiosClient'


const detailApi = {   
//   getAll: params => {
//     const url = `/apartments/10/detail`;
//     return axiosClient.get(url, { params });
//   },

  get: id => {//apartments/10/detail
    const url = `/apartments/${id}/detail`;
    return axiosClient.get(url);
  }, 
}

export default detailApi;
