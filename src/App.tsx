

import { Box } from '@chakra-ui/react'
import './App.css'
import Header from './components/Heading'
import TabsBar from './components/TabsBar'
import { apiData } from './Data/apiData' 
import FactSection from './components/FactSection'



function App() {

  const headerTitle = 'BrainStorming'

  const features = {
    title:'Facts & Wisdom'
  }


  return (
    <Box padding={4}>
    <Header
    title ={headerTitle}
    />
    <TabsBar
      features ={features}
    />
    <FactSection
    data={apiData}
    />
    </Box>
  
  )
}

export default App
