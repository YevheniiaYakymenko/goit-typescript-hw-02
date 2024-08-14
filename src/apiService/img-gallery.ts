import axios from "axios";
import { Image } from "../components/App/App";

axios.defaults.baseURL = "https://api.unsplash.com/";

interface FetchImgResponse {
  results: Image[];
  total_pages: number;
}

export default async function fetchImg(query: string, currentPage: number) {
  const response = await axios.get<FetchImgResponse>("/search/photos/", {
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
