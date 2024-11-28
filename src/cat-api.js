import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_a0FYox2tQO6dAu3XMEXTVZslGz8J3eUAxfdEsncevx3eGom2rGpbp6x7GAaboKCX";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

export function fetchBreeds() {
  return axios("/breeds").then((response) =>
    response.data.map(({ id, name }) => ({ id, name }))
  );
}

export function fetchCatByBreed(breedId) {
  return axios(`/images/search?breed_ids=${breedId}`).then((response) => {
    const { url, breeds } = response.data[0];
    const { name, description } = breeds[0];
    return { url, name, description };
  });
}
