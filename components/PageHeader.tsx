import { SectorTileType } from "@/types/SectorTileType";
import { Children, PropsWithChildren } from "react";
import { Container } from "./Container";

interface Props {
  title: string;
  text: string;
}

export const PageHeader: React.FC<PropsWithChildren<Props>> = ({
  title,
  text,
  children,
}) => {
  return (
    <Container className="w-full flex flex-col gap-12">
      <h1 className="font-heading text-6xl text-alpha font-bold max-w-2xl leading-[1.2]">
        {title}
      </h1>
      <p className="text-xl max-w-3xl font-medium">{text}</p>
      {children}
    </Container>
  );
};
