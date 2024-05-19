import { Character } from "@domain/entities/Character";

export interface CharacterRepository {
  getCharacters(
    page: number
  ): Promise<{ results: Character[]; count: number; totalPages: number }>;
}
