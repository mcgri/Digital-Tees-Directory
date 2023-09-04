import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectorTile } from "@/components/SectorTile";
import { Sectors } from "@/data/sectors";
import { Building2 } from "lucide-react";
import { Fragment } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <PageHeader
        title="Unlock Teesside's Digital Landscape"
        text="Discover the digital pulse of Teesside with Digital Tees Directory. Find an extensive collection of local digital businesses, ranging from tech solutions to web development and digital marketing. Seamlessly connect and collaborate within Teesside's thriving digital ecosystem. Unleash your digital potential today."
      >
        <div className="flex  gap-4 items-stretch md:items-center">
          <a className="dtd-button pl-5 pr-5 md:pl-8 md:pr-8" href="#">
            Locate digital experts
          </a>
          <a className="dtd-button pl-5 pr-5 md:pl-8 md:pr-8 " href="#">
            List your company
          </a>
        </div>
      </PageHeader>

      <Container className="w-full flex flex-col gap-12">
        <h2 className="font-heading text-5xl text-alpha font-bold max-w-2xl leading-[1.2]">
          I&apos;m looking for;
        </h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Sectors.map((sector) => (
            <Fragment key={sector.id}>
              <SectorTile sector={sector} />
            </Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}
