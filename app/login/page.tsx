import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export interface Props {}

const Page = async ({}: Props) => {
  return (
    <div className="flex flex-col gap-12 py-24">
      <PageHeader title="Sign in"></PageHeader>
      <Container className="w-full flex flex-col gap-6">Page content</Container>
    </div>
  );
};

export default Page;
