import axiosClient from '../axiosClient'


const hotelApi = {
  get: id => {
    const url = `/apartments/city/${id}/apartment?type=hotels`;
    return axiosClient.get(url);
  }
}

export default hotelApi; 
 