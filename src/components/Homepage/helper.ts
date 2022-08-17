import axios from "axios";

export const getNews = async (page: number, pageSize: number) => {
  try {
    const result = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=e59874d817cb4906b3f619547ebccdd8&page=${page}&pageSize=${pageSize}`
    );
    const response = result.data.articles;
    return response;
  } catch (error) {
    console.log("Error in homepage", error);
  }
};
