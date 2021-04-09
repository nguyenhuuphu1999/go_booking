import axiosClient from '../axiosClient'


const hotelApi = {
  get: id => {
    const url = `/apartments/city/${id}/apartment?type=tret`;
    return axiosClient.get(url);
  }
}

export default hotelApi; 
 