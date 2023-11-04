import axios from 'axios'
import {baseUrl} from "./contants/constants"
const instance = axios.create({
    baseURL: baseUrl,

  });
  export default instance 