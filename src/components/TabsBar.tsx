import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";



interface Props{
    features:{
        [key:string]:string
    }
}



function TabsBar({features}:Props) {

    const featureArray = Object.entries(features)

  return (
    <Breadcrumb my={4} fontSize={18}>
    {featureArray.map(([key,value])=> {
        return <BreadcrumbItem key={key}>
            <BreadcrumbLink href={key}>{value}</BreadcrumbLink>
        </BreadcrumbItem>
    })}
</Breadcrumb>
  );
}

export default TabsBar;
