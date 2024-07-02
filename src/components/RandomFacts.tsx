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
        lg:'30px',
        md:'25px',
        sm:'30px'
        }} className={styles.headingPrimary}>{data.title}</Heading>
        <Box>
          <Image
            src={data.picture}
            width='100%'
            height={{
                base:'300px'
            }}
            objectFit="cover"
          />
        </Box>
        <Text
        width='70%'
        textAlign='center'
        my={5}
        fontSize={18}
        
        >{message}</Text>
        <Button onClick={() => setNewMessage(!newMessage)}>Gimme More</Button>
      </VStack>
    </>
  );
}

export default RandomFacts;
