import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlateform, setSelectedPlateform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
        xl: `"nav nav" "aside main"`,
      }}
      // 在Chrkra UI库中，templateColumns是一个用于定义网格布局列宽的属性。
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
        xl: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSeletedGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectedPlateform={(plateform) => setSelectedPlateform(plateform)}
          selectedPlateform={selectedPlateform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlateform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
