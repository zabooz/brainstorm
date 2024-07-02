import { Heading } from '@chakra-ui/react'



interface Props{
    title: string
}


function Header({title}: Props) {
  return (
    <Heading
        size='4xl'
        textAlign='center'
        my={10}
        
    >{title}</Heading>
  )
}

export default Header