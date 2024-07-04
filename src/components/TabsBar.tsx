import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

interface Feature {
  [key: string]: string;
}

interface Props {
  features: Feature;
  scrollView: (k: any) => void;
  hrefs: any[];
}

function TabsBar({ features, scrollView, hrefs }: Props) {
  const featureArray = Object.entries(features);

  const getRef = (name: string) => {
    let result;

    hrefs.forEach((href) => {
      
      const refName = href.current._reactProps$v9d5q0z28sd

      if (refName.includes(name.slice(0, -3))) result = href;
    });

    return result
  };

  return (
    <Breadcrumb
      my={4}
      fontSize={18}
      style={{
        position: "sticky",
        top: "0",
        zIndex: 1000,
      }}
    >
      {featureArray.map(([key, value]) => {
        return (
          <BreadcrumbItem key={key}>
            <BreadcrumbLink
              href={key}
              fontSize={32}
              my={10}
              onClick={(e) => {
                e.preventDefault();
                console.log(value)
                const href = getRef(value)
                scrollView(href);
              }}
            >
              {value}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

export default TabsBar;
