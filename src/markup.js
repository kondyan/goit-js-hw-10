export const getCatCardByBreed = ({ url, name, description }) =>
  `<img class="catImg" width="400px" src="${url}" alt="${name}">
      <h2 class="catName">${name}</h2>
      <p class="catDesc">${description}</p`;
