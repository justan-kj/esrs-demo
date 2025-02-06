import axios from "./axiosInstance";

export const getPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};

export const createPost = async (newPost) => {
  const response = await axios.post("/api/posts", newPost);
  return response.data;
};
