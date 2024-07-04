import {Heading, SimpleGrid } from "@chakra-ui/react";

import { DataObject } from "../Data/apiData";

import RandomFacts from "./RandomFacts";
import { forwardRef } from "react";

interface Props {
  data: DataObject;
  ref: any
}

const  FactSection= forwardRef<HTMLDivElement,Props> (({ data},ref ) => {

  const {donaldTrump,chuckNorris,wisdom} = data


  return (
    <>
    <Heading ref={ref}>Facts & Wisdom</Heading>
    <SimpleGrid columns={{
      md:1,
      lg:3
    }}
    spacing={20}>
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