import axiosClient from '../axiosClient'


const hotelApi = {
  get: id => {
    const url = `/apartments/city/${id}/apartment?type=motels`;
    return axiosClient.get(url);
  }
}

export default hotelApi; 
 