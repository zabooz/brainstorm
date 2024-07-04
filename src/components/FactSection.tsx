import {Heading, SimpleGrid } from "@chakra-ui/react";

import { DataObject } from "../Data/apiData";

import RandomFacts from "./RandomFacts";
import { forwardRef } from "react";


interface Props {
  data: DataObject;
}

const  FactSection= forwardRef<HTMLHeadingElement, Props>(({ data }, ref) => {

  const {donaldTrump,chuckNorris,wisdom} = data


  return (
    <>
    <Heading ref={ref} my={20}
    textAlign='center'
    >Facts & Wisdom</Heading>
    <SimpleGrid columns={{
      md:1,
      lg:3
    }}
    spacing={{
      '2xl':0,
      base : '80px',
      md:'40px'
    }}
    >
      <RandomFacts
      data={donaldTrump}
      />
      <RandomFacts data={wisdom}/>
      <RandomFacts data={chuckNorris} />
    </SimpleGrid>
    </>
  );
}
)

export default FactSection