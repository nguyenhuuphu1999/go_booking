import axiosClient from './axiosClient'


const homeStayApi = {
  // getAll: params => {
  //   const url = `/apartments/4/typeApartment`;
  //   return axiosClient.get(url, { params });
  // },

  get: (id,page) => { ///apartments/1/typeApartment?page=1
    const url = `/apartments/${id}/typeApartment?page=${page}`;
    return axiosClient.get(url);
  },  
 
}

export default homeStayApi;
