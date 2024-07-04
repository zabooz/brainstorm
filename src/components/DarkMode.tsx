import { HStack, Switch, useColorMode,Text } from "@chakra-ui/react"


function DarkMode() {

    const {toggleColorMode,colorMode} = useColorMode()

  return (
    <HStack>
        <Switch
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
            colorScheme="teal"        
        />
        <Text>Dark Mode</Text>

  
    </HStack>
  )
}

export default DarkMode
