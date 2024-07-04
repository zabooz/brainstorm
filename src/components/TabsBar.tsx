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

  return (
    <Breadcrumb
      m={10}
      fontSize={32}
      style={{
        position: "sticky",
        top: "0",
        zIndex: 1000,
      }}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Start</BreadcrumbLink>
      </BreadcrumbItem>
      {featureArray.map(([key, value], index) => {
        return (
          <BreadcrumbItem key={key}>
            <BreadcrumbLink
              href={key}
              onClick={(e) => {
                e.preventDefault();
                scrollView(hrefs[index+1]);
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
