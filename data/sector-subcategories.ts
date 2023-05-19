import { Sectors } from "./sectors";

export const Subcategories = [
  {
    id: "react",
    name: "React",
    parent: Sectors.filter((sector) => sector.id === "web-dev")[0],
  },
  {
    id: "nextjs",
    name: "NextJS",
    parent: Sectors.filter((sector) => sector.id === "web-dev")[0],
  },
  {
    id: "nodejs",
    name: "NodeJS",
    parent: Sectors.filter((sector) => sector.id === "web-dev")[0],
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
    parent: Sectors.filter((sector) => sector.id === "web-dev")[0],
  },
  {
    id: "wireframing",
    name: "Wireframing",
    parent: Sectors.filter((sector) => sector.id === "ui-ux")[0],
  },
  {
    id: "shopify",
    name: "Shopify",
    parent: Sectors.filter((sector) => sector.id === "web-dev")[0],
  },
];
