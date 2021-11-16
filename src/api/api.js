import axios from 'axios';

const getApi = async () =>{
    const instance = axios.create({
      //   baseURL: `${process.env.REACT_APP_TITLES_API_URL}/api`,
      baseURL: "https://localhost:44331" + "/api",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return instance;
}

export default {
    getApi
}