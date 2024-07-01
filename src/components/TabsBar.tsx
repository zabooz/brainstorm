import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import apiClients from "../services/api-clients"



interface JokeResponse{
    value:string
}



function TabsBar() {




    const [categories,setCategories] = useState<string[]>([])
    const [category,setCategory] = useState<string>('animal')
    const [joke,setJoke] = useState<string>('')
    const [newJoke,setNewJoke] = useState<boolean>(false)

    useEffect(() => {
  
        apiClients
          .get<string[]>('/categories/')
          .then((res)=> {
            console.log(res.data)
            setCategories(res.data)
  
          })
          .catch(error => {
            console.log(error.message)
          })
  
  
  
    },[])



    useEffect(() => {
        console.log(category)
        apiClients
          .get<JokeResponse>(`/random?category=${category}`)
          .then((res)=> {
            setJoke(res.data.value)
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
<Tabs>
  <TabList>
    {categories?.map(cat => <Tab key={cat}
    onClick={() => handleClick(cat)}
    
    >{cat}</Tab>)}
  </TabList>

  <TabPanels>
        {categories.map(cat => <TabPanel key={cat}>{joke}</TabPanel>)}
  </TabPanels>
</Tabs>
  )
}

export default TabsBar