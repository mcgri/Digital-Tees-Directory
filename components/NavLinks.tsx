import { Nav } from "@/data/nav";

const NavLinks = ({ isDark = false }) => {
  return (
    <>
      {Nav.map((item) => (
        <a
          className={
            isDark
              ? "font-bold  text-alpha  duration-150  hover:text-alpha/60"
              : "font-bold  text-white/60 duration-150 | hover:text-bravo"
          }
          key={item.name}
          href={item.url}
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
