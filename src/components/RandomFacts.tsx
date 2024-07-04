import { useEffect, useState } from "react";
import { Data } from "../Data/apiData";
import createAxiosInstance from "../services/api-clients";
import { Box, Button, GridItem, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import styles from "../css/style.module.css";


interface Props {
  data: Data;
}

interface Response {
  value: string;
  content: string;
}

function RandomFacts({ data }: Props) {
  const apiClient = createAxiosInstance(data.url);

  const [message, setMessage] = useState<string>("");
  const [newMessage, setNewMessage] = useState<boolean>(false);

  useEffect(() => {
    apiClient
      .get<Response>("/")
      .then((res) => {
        const data = res.data;

        const message = data.value ? data.value : data.content;
        setMessage(message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newMessage]);

  return (
    <>
      <VStack>
        <Heading fontSize={{
        xl:'30px',
        lg:'25px',
        md:'30px',
        base:'25px'
        }} className={styles.headingPrimary}>{data.title}</Heading>
        <SimpleGrid
        columns={{
          '2xl': 2,
          base:1

        }}
        justifyContent='center'
        alignContent='center'
        >
        <GridItem>
        <Box
        overflow='hidden'
        borderRadius={5}
        display='flex'
        justifyContent='center'
        >
          <Image
            src={data.picture}
            height={{
              base:'380px'
            }}
            objectFit="cover"
            />
        </Box>
        </GridItem>
        <GridItem
        display="flex"
        flexDirection="column"
        justifyContent='space-between'
        alignItems="center"
        textAlign="center"
        my={3}

        >
          
          <Text
          textAlign='center'
          my={5}
          fontSize={16}
          width={{
            sm: '50%',
            md:'70%'
          }}
          >{message}
          </Text>
          <Button
          padding={3}
          my={3}
          onClick={() => setNewMessage(!newMessage)}>More {data.name}
          </Button>
        </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default RandomFacts;
