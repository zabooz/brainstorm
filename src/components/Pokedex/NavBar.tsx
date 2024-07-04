import {
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Pokemon } from "./Pokedex";
import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";

interface Props {
  pokeList: Pokemon[];
  searchPokemon: (name: string) => void;
}

function NavBar({ pokeList, searchPokemon }: Props) {

  const [searchValue, setSearchValue] = useState<string>("");
  const [displayList,setDisplayList] = useState<boolean>(true)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchPokemon(searchValue);
    }
  };
  const handleSearchClick = () => {
    searchPokemon(searchValue);
  };

  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Search</Tab>
        <Tab 
        onClick={() => setDisplayList(true)}
        >Pokemon List</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <InputGroup>
            <InputLeftAddon>
              <Search2Icon onClick={handleSearchClick} />
            </InputLeftAddon>
            <Input
              placeholder="Search..."
              onChange={handleInputChange}
              value={searchValue}
              onKeyDown={handleKeyDown}
            ></Input>
          </InputGroup>
        </TabPanel>
        {displayList &&
        <TabPanel>
          <SimpleGrid
            columns={{
              sm: 2,
              md: 3,
            }}
            spacing={4}
          >
            {pokeList.map((pokemon, index) => {
              const nameUpperCase =
                `${index + 1}. ` +
                pokemon.name.slice(0, 1).toUpperCase() +
                pokemon.name.slice(1);

              return (
                <Link
                  textAlign="left"
                  key={index}
                  onClick={() => {
                    searchPokemon(pokemon.name)
                    setDisplayList(false)
                  }}
                >
                  {nameUpperCase}
                </Link>
              );
            })}
          </SimpleGrid>
        </TabPanel>}
      </TabPanels>
    </Tabs>
  );
}

export default NavBar;
