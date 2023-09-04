import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SendHorizontal } from "lucide-react";
//Add a form (non-functional) to the contact page
//I would use something like React Hook Form for the form or Zod for the form and validation

export interface Props {}

const Page = async ({}: Props) => {
  return (
    <div className="flex flex-col gap-12 py-24">
      <PageHeader
        title="Contact us"
        text="Eu ex mollit elit occaecat irure adipisicing enim ipsum ea nulla ea minim sint laborum. Nulla esse labore laboris enim adipisicing velit occaecat veniam ut culpa exercitation laborum sunt. Pariatur sunt do sint laborum ipsum ullamco minim est."
      ></PageHeader>
      <Container className="w-full flex  flex-col justify-stretch md:flex-row gap-10">
        <div className="flex flex-col w-full md:w-1/2 gap-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input id="name" className="px-4 py-3 rounded-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input id="email" className="px-4 py-3 rounded-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="px-4 py-3 rounded-sm min-h-[200px]"
            />
          </div>
          <button className="dtd-button text-sm py-3 px-5 gap-3 w-full md:w-32 justify-center duration-150 hover:bg-white/60">
            <span>Send</span>
            <SendHorizontal className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-2  bg-alpha/80 backdrop-blur-[2px] p-6 text-white ">
          <h3 className="font-bold uppercase text-xl ">Contact details</h3>
          <div className="text-bravo text-lg">
            <p> 123 Fake Street</p>
            <p> London</p>
            <p> SW1A 1AA</p>
            <p> 020 1234 5678</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
