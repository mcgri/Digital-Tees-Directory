import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export interface Props {}

const Page = async ({}: Props) => {
  return (
    <div className="flex flex-col gap-12 py-24">
      <PageHeader
        title="About"
        text="Minim qui reprehenderit pariatur do. Sint eiusmod et enim veniam velit nostrud deserunt labore id occaecat excepteur. Veniam adipisicing exercitation do elit aute quis ipsum adipisicing enim tempor velit cillum. Consectetur sunt adipisicing id ad Lorem duis reprehenderit. Esse consectetur consectetur magna voluptate ex qui mollit cupidatat excepteur cillum veniam consequat qui laborum occaecat."
      ></PageHeader>
      <Container className="w-full flex flex-col gap-6">Page content</Container>
    </div>
  );
};

export default Page;
