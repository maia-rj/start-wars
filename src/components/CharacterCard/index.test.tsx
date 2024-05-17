import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useStore } from "../../store/useStore";
import CharacterCard from ".";

jest.mock("../../store/useStore");

const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

const mockCharacter = {
  name: "Luke Skywalker",
  height: "172",
};

describe("CharacterCard", () => {
  beforeEach(() => {
    mockUseStore.mockReturnValue({
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
    } as any);
  });

  test("renders character name and height", () => {
    render(<CharacterCard character={mockCharacter} isFavorite={false} />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("Height: 172")).toBeInTheDocument();
  });

  test("adds character to favorites", () => {
    render(<CharacterCard character={mockCharacter} isFavorite={false} />);
    fireEvent.click(screen.getByText("Add to Favorites"));
    expect(useStore().addFavorite).toHaveBeenCalledWith(mockCharacter);
  });

  test("removes character from favorites", () => {
    render(<CharacterCard character={mockCharacter} isFavorite={true} />);
    fireEvent.click(screen.getByText("Remove from Favorites"));
    expect(useStore().removeFavorite).toHaveBeenCalledWith(mockCharacter);
  });
});
