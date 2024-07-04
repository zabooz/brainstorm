

import { Box } from '@chakra-ui/react'
import './App.css'
import Header from './components/Heading'
import TabsBar from './components/TabsBar'
import { apiData } from './Data/apiData' 
import FactSection from './components/FactSection'
import Pokedex from './components/Pokedex/Pokedex'
import Starwars from './components/Starwars/Starwars'
import { useEffect, useRef, useState } from 'react'

interface Features {
  [key:string] : string
}


function App() {

  const headerTitle = 'BrainStorming'
  const [features,setFeatures] = useState<Features>({})
  const {pokedex,starWars} = apiData

  useEffect(() => {
    const newFeatures: Features = { ...features };

    for (let key in apiData) {
      if (!newFeatures[key]) {
        const feature = apiData[key].category;
        newFeatures[feature] = feature
      }
    }

    setFeatures(newFeatures);
  }, []); 

  const factsRef = useRef(null)
  const pokemonRef = useRef(null)
  const starwarsRef = useRef(null)
  const topRef = useRef(null)

  const hrefs = [factsRef,pokemonRef,starwarsRef,topRef]

  const scrollToElement = (ref:any) => {

    ref.current.scrollIntoView({behavior:'smooth'})

  }

  return (
    <Box padding={4}>
    <Header
    title ={headerTitle}
    />
    <TabsBar
      scrollView = {scrollToElement}
      hrefs= {hrefs}
      features ={features}
    />
    <FactSection
    ref={factsRef}
    data={apiData}
    />
    <Pokedex
    ref={pokemonRef}
    data= {pokedex}
    />
    <Starwars
    ref={starwarsRef}
    data ={starWars}
    />
    </Box>
  
  )
}

export default App
