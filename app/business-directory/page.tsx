import { BusinessTile } from "@/components/BusinessTile";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Businesses } from "@/data/businesses";
import { Subcategories } from "@/data/sector-subcategories";
import { Sectors } from "@/data/sectors";
import { LayoutGrid, LayoutList, Search } from "lucide-react";
import { Fragment } from "react";

// Build out the business directory page
// - Page should include a search, filters( sector and subcategory), and list all businesses in a paginated list.
// - Each business listed should have the following information;
// - Logo
// - Name
// - Description
// - Tags
// - Address

export interface Props {}

const Page = async ({}: Props) => {
  const sectors = Sectors;
  const categoryTags = Subcategories;

  const listings = [...Businesses, ...Businesses]; // simulate data entries

  return (
    <div className="flex flex-col gap-12 py-24">
      <PageHeader
        title="Business Directory"
        text="Cillum voluptate aliquip aliqua cillum non esse non cupidatat cillum deserunt fugiat Lorem sint aliquip veniam. Irure ipsum magna esse culpa laborum veniam ea. Cupidatat amet esse magna occaecat laborum reprehenderit ex. Pariatur sit tempor ad cillum magna magna ut aliqua excepteur ea dolore aliquip duis."
      ></PageHeader>
      <Container className="w-full flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row justify-between gap-12 bg-bravo p-6 rounded-md">
          <div className="flex items-center gap-6 grow">
            <label htmlFor="subcategory">Search</label>
            <input
              type="text"
              id="search"
              className="grow px-4 py-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-12 ">
            <div className="flex items-center gap-6">
              <label htmlFor="subcategory">Sector</label>
              <select
                id="sector"
                className="grow px-4 py-3 rounded-sm"
                defaultValue="please-select"
              >
                <option id="please-select" value="please-select" disabled>
                  Please select
                </option>
                {sectors.map((tag) => (
                  <option key={tag.id} id={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-6">
              <label htmlFor="subcategory">Subcategory</label>
              <select
                id="subcategory"
                className="grow px-4 py-3 rounded-sm"
                defaultValue="please-select"
              >
                <option id="please-select" value="please-select" disabled>
                  Please select
                </option>
                {categoryTags.map((tag) => (
                  <option key={tag.id} id={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="dtd-button bg-white/60 text-sm py-3 px-5 gap-3 w-full md:w-32 justify-center duration-150 hover:bg-white/90">
            <span>Search</span>
            <Search className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-6">
            <button>
              <LayoutGrid />
            </button>
            <button>
              <LayoutList />
            </button>
          </div>
        </div>

        {listings.length ? (
          <>
            {listings.map((listing) => (
              <Fragment key={listing.id}>
                <BusinessTile business={listing} />
              </Fragment>
            ))}
          </>
        ) : (
          <>No businesses</>
        )}
      </Container>
    </div>
  );
};

export default Page;
