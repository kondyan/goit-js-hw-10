import { fetchCatByBreed } from "./cat-api";
import { fetchBreeds } from "./cat-api";
import { getCatCardByBreed } from "./markup";

const refs = {
  breedSelectRef: document.querySelector(".breed-select"),
  loaderRef: document.querySelector(".loader"),
  errorRef: document.querySelector(".error"),
  catInfoRef: document.querySelector(".cat-info"),
};

fetchBreeds()
  .then((response) => {
    return response.map(
      ({ id, name }) => `<option value="${id}">${name}</option>`
    );
  })
  .then((response) => response.join(""))
  .then((response) =>
    refs.breedSelectRef.insertAdjacentHTML("beforeend", response)
  )
  .catch((error) => {
    refs.errorRef.classList.remove("deleted");
    console.log(error);
  })
  .finally(() => refs.loaderRef.classList.add("deleted"));

refs.breedSelectRef.addEventListener("change", (e) => {
  refs.catInfoRef.innerHTML = "";
  refs.loaderRef.classList.remove("deleted");
  refs.errorRef.classList.add("deleted");
  fetchCatByBreed(refs.breedSelectRef.value)
    .then((response) =>
      refs.catInfoRef.insertAdjacentHTML(
        "beforeend",
        getCatCardByBreed(response)
      )
    )
    .catch((error) => {
      refs.errorRef.classList.remove("deleted");

      console.log(error);
    })
    .finally(() => refs.loaderRef.classList.add("deleted"));
});
