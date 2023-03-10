import axios from 'axios';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (isAuth, apiEndPoint, navigate, dynamicConfig = {}) => {
  try {
    const requestDetails = {
      baseURL: isAuth ? process.env.REACT_APP_BASE_URL_AUTH : process.env.REACT_APP_BASE_URL_SERVICE,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    if (navigate) {
      const errorStatus = e.response?.status;
      if (errorStatus) {
        navigate(`${ERROR_ROUTE}/${errorStatus}`);
      } else {
        navigate(ERROR_ROUTE);
      }
    }
    throw new Error(e.response?.data?.message);
  }
};

export default makeRequest;
