import { Box, Heading, Image } from '@chakra-ui/react'
import { Data } from '../../Data/apiData'
import { forwardRef } from 'react'

interface Props{
    data:Data
    ref:any
}


const  Starwars = forwardRef<HTMLDivElement,Props>(({data},ref)=> {

  return (
    <>
    <Heading ref={ref}
    
    textAlign='center'
    my={10}
    
    >{data.name}</Heading>
    <Box>
        <Image src={data.picture}  />
    </Box>
    
    
    </>
  )
}
)
export default Starwars