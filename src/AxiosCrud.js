// will contain all the function to handle the CRUD regarding Movies

const mockUrl = "https://650e6d5754d18aabfe9926a0.mockapi.io";

import axios from "axios";

// Instance
// You have two different API urls ( Product Listing ( products.ama.com ), payment ( payment.ama.com ) )
// const productsInstance = axios.create({
//   baseURL: "https://products.ama.com/api/",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });

// const paymentInstance = axios.create({
//   baseURL: "https://payment.ama.com/api/",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });

const mockInstance = axios.create({
  baseURL: mockUrl,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const createMovie = async (movieData) => {
  const response = await mockInstance.post("/movies", movieData);
  return response.data;
};

export const getAllMovies = async () => {
  const response = await mockInstance.get("/movies");
  return response.data;
};

export const removeMovie = async (movieId) => {
  const response = await mockInstance.delete(`/movies/${movieId}`);
  return response.data;
};

export const editMovie = async (movieData, movieId) => {
  const response = await mockInstance.put(`/movies/${movieId}`, movieData);
  return response.data;
};
