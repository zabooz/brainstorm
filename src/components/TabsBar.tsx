import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";


interface Feature{
  title:string
}

interface Props{
    [key:string]:Feature
}



function TabsBar({features}:Props) {

  const featureArray = Object.entries(features)

  return (
    <Breadcrumb my={4} fontSize={18}>
    {featureArray.map(([key,value])=> {
        return <BreadcrumbItem key={key}>
            <BreadcrumbLink href={key}
            fontSize={32}
            my={10}
            
            >{value}</BreadcrumbLink>
        </BreadcrumbItem>
    })}
</Breadcrumb>
  );
}

export default TabsBar;
