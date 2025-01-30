import axios from "axios";

export const fetchImages = async (searchQuery, pageNumber) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: searchQuery,
      page: pageNumber,
      per_page: 15,
      client_id: "2M9u7uEeYIuUA2zPIbfbn0fIlPsaTVSuslioOjhsCy8",
    },
  });
  return response.data.results;
};
