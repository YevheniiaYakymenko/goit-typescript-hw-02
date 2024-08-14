import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchImg(query, currentPage) {
  const response = await axios.get("/search/photos/", {
    params: {
      client_id: "4NIbHWbD_SkRu5RadIGcptll_K2zM9E4URJpv0Af3BM",
      page: currentPage,
      per_page: 15,
      query: query,
      orientation: "landscape",
    },
  });
  return response.data;
}
