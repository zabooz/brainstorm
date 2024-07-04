

import { Box, Divider } from '@chakra-ui/react'
import './App.css'
import Header from './components/Heading'
import TabsBar from './components/TabsBar'
import { apiData } from './Data/apiData' 
import FactSection from './components/FactSection'
import Pokedex from './components/Pokedex/Pokedex'
import Starwars from './components/Starwars/Starwars'
import { useEffect, useRef, useState } from 'react'
import styles from './css/style.module.css'
interface Features {
  [key:string] : string
}


function App() {

  const headerTitle = 'BrainStorming'
  const [features,setFeatures] = useState<Features>({})
  const {pokedex,starWars} = apiData

  useEffect(() => {
    const newFeatures: Features = { ...features};

    for (let key in apiData) {
      if (!newFeatures[key]) {
        const feature = apiData[key].category;
        newFeatures[feature] = feature
      }
    }

    setFeatures(newFeatures);
  }, []); 

  const factsRef = useRef<HTMLHeadingElement>(null)
  const pokemonRef = useRef<HTMLHeadingElement>(null)
  const starWarsRef = useRef<HTMLHeadingElement>(null)
  const topRef = useRef<HTMLHeadingElement>(null)

  console.log(features)

  const hrefs = [topRef,factsRef,pokemonRef,starWarsRef]

  const scrollToElement = (ref:any) => {

    ref.current.scrollIntoView({behavior:'smooth', block:'start'})

  }

  return (
    <Box padding={4}>
    <Header
    title ={headerTitle}
    ref={topRef}
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
    <Divider
    className={styles.divider}/> 
    <Pokedex
    ref={pokemonRef}
    data= {pokedex}
    />
    <Divider/>
    <Starwars
    ref={starWarsRef}
    data ={starWars}
    />
    <Divider mb={2000}/>
    </Box>
  
  )
}

export default App
