

import './App.css'
import Header from './components/Heading'
import TabsBar from './components/TabsBar'





function App() {

  const headerTitle = 'BrainStorming'

  return (
    <>
    <Header
    title ={headerTitle}
    />
    <TabsBar/>
    </>
  
  )
}

export default App
