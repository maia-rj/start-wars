import { Character } from "@domain/entities/Character";
import { CharacterRepository } from "@domain/repositories/CharacterRepository";
import api from "./apiInstance";

class SwapiService implements CharacterRepository {
  async getCharacters(
    page: number
  ): Promise<{ results: Character[]; count: number; totalPages: number }> {
    const response = await api.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    return {
      results: response.data.results.map((char: any) => ({
        name: char.name,
        height: char.height,
      })),
      count: response.data.count,
      totalPages: Math.ceil(response.data.count / 10),
    };
  }
}

const swapiService = new SwapiService();
export default swapiService;
