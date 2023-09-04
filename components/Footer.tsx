import { Nav } from "@/data/nav";
import { Container } from "./Container";
//The footer should include navigation, and a way for users to subscribe to a newsletter (non-functional)
const Footer = () => {
  return (
    <>
      <footer className="bg-bravo w-full min-h-40 bottom-0 relative">
        <Container className="flex flex-col-reverse lg:flex-row gap-10 pt-10 pb-10 justify-between ">
          <ul className="flex flex-col gap-y-2">
            {Nav.map((item) => (
              <a
                className="font-bold  text-alpha  duration-150  hover:text-alpha/60"
                key={item.name}
                href={item.url}
              >
                {item.name}
              </a>
            ))}
          </ul>
          <div className="grid">
            <h3 className="font-bold text-alpha">
              Subscribe to our newsletter
            </h3>
            <p className="text-alpha/60">
              Receive updates on the latest listings and events
            </p>
            <div className="grid md:flex gap-4">
              <input
                className="bg-white/60 min-w-fit lg:w-96 h-12 rounded-md px-4 "
                placeholder="Email address"
              />
              <button className="bg-alpha/20 w-32 h-12 rounded-md duration-150 hover:bg-white/60">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
