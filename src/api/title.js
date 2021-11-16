import apiInstance from "./api";
import { getPurgedObj } from '../utilities/utilities';

const getTitles = async (searchQuery, ordering, page, pageSize) => {
  console.log(`page:${page}, pageSize:${pageSize}`);
  const api = await apiInstance.getApi();
  const fullParams = {
    search_query: searchQuery,
    ordering: ordering,
    page: page,
    page_size: pageSize,
  };
  const params = getPurgedObj(fullParams);

  return api
    .get(`titles`, { params })
    .then(async (res) => {
      console.log("getTitles:", res);
      return { page: page, ...res.data };
    })
    .catch((error) => {
      console.log("Error getTitles:", error);
    });
};

const getTitleById = async (titleId) => {
  const api = await apiInstance.getApi();
  return api
    .get(`titles/${titleId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("Error getTitleById:", error);
    });
};

const getCreditsByTitle = async (titleId, page) => {
  const api = await apiInstance.getApi();
  return api
    .get(`titles/${titleId}/credits`)
    .then((res) => {
      return res.data.results;
    })
    .catch((error) => {
      console.log("Error getCreditsByTitle:", error);
    });
};

export default {
  getTitleById,
  getCreditsByTitle,
  getTitles,
};
