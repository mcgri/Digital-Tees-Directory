import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectorTile } from "@/components/SectorTile";
import { Sectors } from "@/data/sectors";
import { Fragment } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <PageHeader
        title="Sectors"
        text="Velit ex ea nostrud cillum fugiat aute labore sint. Elit irure nulla dolore consectetur dolor pariatur elit. Consequat et in commodo non est occaecat ipsum qui dolor tempor mollit."
      ></PageHeader>

      <Container className="w-full flex flex-col gap-12">
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
