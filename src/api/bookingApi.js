import axiosClient from './axiosClient'


const bookingApi = {   
  // getAll: params => {
  //   const url = `/apartments/9/detail`;
  //   return axiosClient.get(url, { params });
  // },

  get: id => {
    const url = `/apartments/${id}/detail`;
    return axiosClient.get(url);
  }, 
}

export default bookingApi;
