import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export interface Props {}

const Page = async ({}: Props) => {
  return (
    <div className="flex flex-col gap-12 py-24">
      <PageHeader
        title="Business Directory"
        text="Cillum voluptate aliquip aliqua cillum non esse non cupidatat cillum deserunt fugiat Lorem sint aliquip veniam. Irure ipsum magna esse culpa laborum veniam ea. Cupidatat amet esse magna occaecat laborum reprehenderit ex. Pariatur sit tempor ad cillum magna magna ut aliqua excepteur ea dolore aliquip duis."
      ></PageHeader>
      <Container className="w-full flex flex-col gap-6">Page content</Container>
    </div>
  );
};

export default Page;
