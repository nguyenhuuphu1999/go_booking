import axiosClient from '../axiosClient'


const apartmentApi = {
  get: id => {
    const url = `/apartments/city/${id}/apartment?type=apartment`;
    return axiosClient.get(url);
  }
}

export default apartmentApi; 
 