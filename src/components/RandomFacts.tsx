import { useEffect, useState } from "react";
import { Data } from "../Data/apiData";
import createAxiosInstance from "../services/api-clients";
import {
  Box,
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import styles from "../css/style.module.css";

interface Props {
  data: Data;
}

interface Response {
  value: string;
  content: string;
  author: string;
}

interface Message {
  message: string;
  author: string | null;
}

function RandomFacts({ data }: Props) {
  const apiClient = createAxiosInstance(data.url);

  const [message, setMessage] = useState<Message>({ message: "", author: "" });
  const [newMessage, setNewMessage] = useState<boolean>(false);

  useEffect(() => {
    apiClient
      .get<Response>("/")
      .then((res) => {
        const data = res.data;

        const message = data.value ? data.value : data.content;
        const author = data.author ? data.author : null;
        setMessage({ message, author });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newMessage]);

  return (
    <>
      <VStack>
        <Heading
          fontSize={{
            xl: "30px",
            lg: "25px",
            md: "30px",
            base: "25px",
          }}
          className={styles.headingPrimary}
          justifyContent={{
            base: "center",
            "2xl": "flex-start",
          }}
          display={"flex"}
          width={"100%"}
        >
          {data.title}
        </Heading>
        <SimpleGrid
          columns={{
            "2xl": 2,
            base: 1,
          }}
          justifyContent="center"
          alignContent="center"
        >
          <GridItem
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              overflow="hidden"
              borderRadius={5}
              display="flex"
              justifyContent="center"
            >
              <Image
                src={data.picture}
                height={{
                  base: "380px",
                }}
                objectFit="cover"
              />
            </Box>
          </GridItem>
          <GridItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            justifyContent={'space-between'}
            my={3}
            minHeight={{
              sm:'300px'
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                textAlign="center"
                my={5}
                fontSize={16}
                width={{
                  sm: "80%",
                  "2xl": "100%",
                }}
                padding={10}
                color={"#999"}
              >
                „{message.message}“
              </Text>
              <Text>{message.author && "- " + message.author}</Text>
            </Box>
            <Button
              alignSelf={"center"}
              padding={3}
              my={3}
              onClick={() => setNewMessage(!newMessage)}
            >
              More {data.name}
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default RandomFacts;
