

import { Box } from '@chakra-ui/react'
import './App.css'
import ChuckNorris from './components/ChuckNorris'
import Header from './components/Heading'
import TabsBar from './components/TabsBar'





function App() {

  const headerTitle = 'BrainStorming'

  const features = {
    chuckNorris:'Chuck Norris Jokes',
  }


  return (
    <Box padding={4}>
    <Header
    title ={headerTitle}
    />
    <TabsBar
      features ={features}
    />
    <ChuckNorris
    title={features.chuckNorris}
    
    />
    </Box>
  
  )
}

export default App
