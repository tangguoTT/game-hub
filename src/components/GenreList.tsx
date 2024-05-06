import { ListItem, UnorderedList } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <div>
      <UnorderedList>
        {genres.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};

export default GenreList;
