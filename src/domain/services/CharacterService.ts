import { Character } from "@domain/entities/Character";
import { CharacterRepository } from "@domain/repositories/CharacterRepository";

export class CharacterService {
  private repository: CharacterRepository;

  constructor(repository: CharacterRepository) {
    this.repository = repository;
  }

  async getCharacters(
    page: number
  ): Promise<{ results: Character[]; count: number; totalPages: number }> {
    return await this.repository.getCharacters(page);
  }
}
