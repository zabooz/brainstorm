import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import apiClients from "../services/api-clients"



interface JokeResponse{
    value:string
    icon_url:string
}



function TabsBar() {




    const [categories,setCategories] = useState<string[]>([])
    const [category,setCategory] = useState<string>('animal')
    const [joke,setJoke] = useState<string>('')
    const [newJoke,setNewJoke] = useState<boolean>(false)
    const [icon,setIcon] = useState<string>('')

    useEffect(() => {
  
        apiClients
          .get<string[]>('/categories/')
          .then((res)=> {
            setCategories(res.data)
            
          })
          .catch(error => {
            console.log(error.message)
          })
  
  
  
    },[])



    useEffect(() => {
        apiClients
          .get<JokeResponse>(`/random?category=${category}`)
          .then((res)=> {
            setJoke(res.data.value)
            setIcon(res.data.icon_url)
           
          })
          .catch(error => {
            console.log(error.message)
          })
  
          
  
    },[category,newJoke])



    const handleClick = (category:string) => {
        setCategory(category)
        setNewJoke(!newJoke)
    }



  return (
<Tabs isFitted variant='enclosed'>
  <TabList>
  <Box m={2}>
  <Image src={icon}alt='Dan Abramov' />
</Box>
    {categories?.map(cat => <Tab key={cat}
    onClick={() => handleClick(cat)}
    
    >{cat.toUpperCase()}</Tab>)}
  </TabList>

  <TabPanels>
        {categories.map(cat => <TabPanel key={cat}>{joke}
        </TabPanel>)}
  </TabPanels>
</Tabs>
  )
}

export default TabsBar