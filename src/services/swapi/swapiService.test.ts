import axios from "axios";
import swapiService from "./swapiService";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("swapiService", () => {
  test("fetches characters successfully from an API", async () => {
    const data = {
      results: [
        { name: "Luke Skywalker", height: "172" },
        { name: "Darth Vader", height: "202" },
      ],
    };

    mockedAxios.get.mockResolvedValue({ data });

    const result = await swapiService.getCharacters(1);
    expect(result).toEqual(data);
  });

  test("fetches characters with error from an API", async () => {
    mockedAxios.get.mockRejectedValue(new Error("Failed to fetch characters"));

    await expect(swapiService.getCharacters(1)).rejects.toThrow(
      "Failed to fetch characters"
    );
  });
});
