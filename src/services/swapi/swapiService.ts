import axios from "axios";

const API_BASE_URL = "https://swapi.dev/api";

export const getCharacters = async (page: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/people`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch characters");
  }
};

export default {
  getCharacters,
};
