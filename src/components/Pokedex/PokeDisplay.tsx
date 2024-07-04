import { Box, GridItem, Image, SimpleGrid } from "@chakra-ui/react"
import { PokemonResponse } from "./Pokedex"


interface Props{
  pokemon : PokemonResponse | null
}


function PokeDisplay({pokemon}:Props) {

  


  return (
    <SimpleGrid columns={1} row={2}>
      <SimpleGrid columns={2}>
        <GridItem> <Box>
          <Image src={pokemon?.sprites.front_default}/>
          <Image src={pokemon?.sprites.back_default}/>
          
          
          </Box> </GridItem>
        <SimpleGrid>
          <GridItem>Stats</GridItem>
          <GridItem>{'Name: ' + pokemon?.name}</GridItem>
          <GridItem>{'Weight: ' + pokemon?.weight}</GridItem>
          <GridItem>geld</GridItem>
          <GridItem>gold</GridItem>

        </SimpleGrid>
      </SimpleGrid>
      <GridItem bg = 'red'>Descrition and stuff</GridItem>


    </SimpleGrid>
  )
}

export default PokeDisplay