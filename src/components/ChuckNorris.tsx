import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import {Button, VStack, Heading, Select, Text} from "@chakra-ui/react";
import { emojis } from "../Data/emojis";
import styles from '../css/style.module.css'
interface JokeResponse {
  value: string;
  icon_url: string;
}

interface Props{
    title:string
}


function ChuckNorris({title}:Props) {
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>(categories[0]);
  const [joke, setJoke] = useState<JokeResponse>({ value: "", icon_url: "" });
  const [newJoke, setNewJoke] = useState<boolean>(false);

  useEffect(() => {
    apiClients
      .get<string[]>("/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    apiClients
      .get<JokeResponse>(`/random?category=${category}`)
      .then((res) => {
        const { value, icon_url } = res.data;

        setJoke({ value, icon_url });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [category, newJoke]);


  return (
    <>
    <Heading className={styles.headingPrimary}
        my={10}
    >{title}</Heading>
        <VStack spacing={5}>
        <Select width={40}
        onChange={(e) => setCategory(e.target.value) }
    
        >
        {categories.map(cat => {
            return <option
            value={cat}
            >{emojis[cat]}   {cat}</option>
        })}
        </Select>
        <Text>{joke.value}</Text>
        <Button
        onClick={() => setNewJoke(!newJoke) }
        >more jokes!</Button>
        </VStack>
    </>
  );
}

export default ChuckNorris;
