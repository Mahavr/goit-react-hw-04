import axios from "axios";

const API_KEY = "33_fYA6-zsmLRkWZ0ya9ulee1qcZa5hYYHRq7wb-oE0";

export const fetchImg = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`,
    {
      params: { query, page, per_page: 16 },
    }
  );
  return response.data;
};
