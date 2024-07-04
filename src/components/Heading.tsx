import { Box, HStack, Heading} from '@chakra-ui/react'
import { forwardRef } from 'react'
import DarkMode from './DarkMode'



interface Props{
    title: string
    ref:any
}


const  Header = forwardRef<HTMLDivElement,Props> (({title},ref) => {
  return (
    <HStack justifyContent={'space-between'} mx={10}>
      <Heading
      size='4xl'
      textAlign='center'
      my={10}
      ref={ref}
      >{title}</Heading>
      <Box>
      <DarkMode/>

      </Box>
    </HStack>
  )
}
)
export default Header