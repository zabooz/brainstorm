import { Heading } from '@chakra-ui/react'
import { forwardRef } from 'react'



interface Props{
    title: string
    ref:any
}


const  Header = forwardRef<HTMLDivElement,Props> (({title},ref) => {
  return (
    <Heading
        size='4xl'
        textAlign='center'
        my={10}
        ref={ref}
    >{title}</Heading>
  )
}
)
export default Header