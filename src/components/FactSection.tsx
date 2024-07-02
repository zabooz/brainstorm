import {SimpleGrid } from "@chakra-ui/react";

import { DataObject } from "../Data/apiData";

import RandomFacts from "./RandomFacts";

interface Props {
  data: DataObject;
}

export default function FactSection({ data }: Props) {
  return (
    <SimpleGrid columns={{
      sm:1,
      md:3
    }}
    spacing={5}>
      <RandomFacts
      data={data.donaldTrump}
      />
      <RandomFacts data={data.wisdom}/>
      <RandomFacts data={data.chuckNorris} />
    </SimpleGrid>
  );
}
