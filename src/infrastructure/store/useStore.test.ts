import { act } from "react";
import { useStore } from "./useStore";

type Character = {
  name: string;
  height: string;
};

const resetStore = () => {
  const { setCharacters, setFavorites } = useStore.getState();
  act(() => {
    setCharacters([]);
    setFavorites([]);
  });
};

describe("useStore", () => {
  beforeEach(() => {
    localStorage.clear();
    resetStore();
  });

  test("sets characters", () => {
    const { setCharacters } = useStore.getState();

    const newCharacters: Character[] = [
      { name: "Luke Skywalker", height: "172" },
      { name: "Darth Vader", height: "202" },
    ];

    act(() => {
      setCharacters(newCharacters);
    });

    expect(useStore.getState().characters).toEqual(newCharacters);
  });

  test("adds a character to favorites", () => {
    const { addFavorite } = useStore.getState();

    const character: Character = { name: "Luke Skywalker", height: "172" };

    act(() => {
      addFavorite(character);
    });

    expect(useStore.getState().favorites).toContainEqual(character);
    expect(localStorage.getItem("favorites")).toEqual(
      JSON.stringify([character])
    );
  });

  test("removes a character from favorites", () => {
    const { addFavorite, removeFavorite } = useStore.getState();

    const character: Character = { name: "Luke Skywalker", height: "172" };

    act(() => {
      addFavorite(character);
    });

    act(() => {
      removeFavorite(character);
    });

    expect(useStore.getState().favorites).not.toContainEqual(character);
    expect(localStorage.getItem("favorites")).toEqual(JSON.stringify([]));
  });
});
