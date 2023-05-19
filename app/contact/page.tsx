import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export interface Props {}

const Page = async ({}: Props) => {
  return (
    <div className="flex flex-col gap-12 py-24">
      <PageHeader
        title="Contact us"
        text="Eu ex mollit elit occaecat irure adipisicing enim ipsum ea nulla ea minim sint laborum. Nulla esse labore laboris enim adipisicing velit occaecat veniam ut culpa exercitation laborum sunt. Pariatur sunt do sint laborum ipsum ullamco minim est."
      ></PageHeader>
      <Container className="w-full flex flex-col gap-6">Page content</Container>
    </div>
  );
};

export default Page;
