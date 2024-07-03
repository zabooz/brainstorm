import { useEffect, useState } from "react";
import { Data } from "../Data/apiData";
import createAxiosInstance from "../services/api-clients";
import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
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
        <Box>
          <Image
            src={data.picture}
            width={{
              base:'300px',
              md:'400px',
              sm:'400px',
            }}
            height={{
                base:'300px'
            }}
            objectFit="cover"
          />
        </Box>
        <Text
        textAlign='center'
        my={5}
        fontSize={16}
        width={{
          sm: '50%',
          md:'70%'
        }}
        height={{
          base:'120px',
          sm:'100%',
        }}
        >{message}</Text>
        <Button onClick={() => setNewMessage(!newMessage)}>More {data.name}</Button>
      </VStack>
    </>
  );
}

export default RandomFacts;
