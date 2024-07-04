import { Grid, GridItem, Heading } from "@chakra-ui/react"
import PokeDisplay from "./PokeDisplay"
import { forwardRef, useEffect, useState } from "react"
import createAxiosInstance from "../../services/api-clients"
import { Data } from "../../Data/apiData"
import NavBar from "./NavBar"

interface Props{
  data:Data
  ref:any;
}

export interface Pokemon{
    name:string,
    url:string
  
}

interface Stat {
  base_stat:number;
  effort:number;
  stat:{
    name:string
  }
}

interface Type{

  type:{
    name:string
  }


}


export interface PokemonResponse {
  cries: {
    legacy: string;
  };
  name:string;
  order:number;
  height: number;
  weight:number;
  sprites:{
    front_default:string,
    back_default:string
  };
  stats: Stat[];
  types: Type[]

}
interface ListResponse{
  results: Pokemon[]
}


const Pokedex = forwardRef<HTMLDivElement,Props> (({data},ref) => {

  const apiClient = createAxiosInstance(data.url)
  const [pokemonList,setPokemonList] = useState<Pokemon[]>([])
  const [selectedPokemon,setSelectedPokemon] = useState('bulbasaur')
  const [pokemonStats,setPokemonStats] = useState<PokemonResponse | null>(null)

  useEffect(() => {
    apiClient.get<PokemonResponse>(`/pokemon/${selectedPokemon}`)
      .then((res )=> {
          setPokemonStats(res.data)
      })
      .catch(error => {
          console.log(error)
      })
  },[selectedPokemon])   

  useEffect(() => {
    
    apiClient.get<ListResponse>(`/pokemon?limit=151`)
      .then(res => {
        const data = res.data.results
        setPokemonList(data);

      })
      .catch((error) => {
        console.log(error)
      })
      
      
    },[])
    


    const searchPokemon =(pokeName:string) =>{

      setSelectedPokemon(pokeName)

    }
  return (
    <Grid templateAreas={`'display'
                          'navBar'
                           pokeFeature`}
    
    my={10}
    
    >
       <GridItem>
        <Heading my={10} ref={ref} 
        textAlign='center'
        >{data.name}</Heading>
       </GridItem>
       <GridItem>
        <NavBar
        pokeList ={pokemonList}
        searchPokemon  ={searchPokemon}
        ></NavBar>
       </GridItem>
       <GridItem>
        <PokeDisplay
        
        pokemon = {pokemonStats}
        
        />
       </GridItem>
    </Grid>
  )
}
)
export default Pokedex