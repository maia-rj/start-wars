import { useEffect, useState } from "react";
import swapiService from "../../services/swapi/swapiService";
import { useStore } from "../../store/useStore";

export const useFetchCharacters = (page: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const PAGE_LENGTH = 10;
  const setCharacters = useStore((state) => state.setCharacters);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const data = await swapiService.getCharacters(page);
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / PAGE_LENGTH));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch characters");
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [page, setCharacters]);

  return { loading, error, totalPages };
};
