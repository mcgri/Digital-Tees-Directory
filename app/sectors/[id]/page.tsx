import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Sectors } from "@/data/sectors";
import { Subcategories } from "@/data/sector-subcategories";
import { LayoutGrid, LayoutList } from "lucide-react";
import { Businesses } from "@/data/businesses";
import { BusinessTile } from "@/components/BusinessTile";
import { Fragment } from "react";

export interface Props {
  params: {
    id: string;
  };
}

const Page = async ({ params }: Props) => {
  // This will eventually be pulling from the database
  const data = Sectors.filter((sector) => sector.id === params.id);
  const pageData = data[0];

  const categoryTags = Subcategories.filter(
    (sub) => sub.parent.id === pageData.id
  );

  const listings = Businesses.filter((listing) =>
    listing.sectors.some((sector) => sector.id === pageData.id)
  );

  return (
    <div className="flex flex-col gap-12 py-24">
      <PageHeader title={pageData.name} text={pageData.shortDesc}></PageHeader>
      <Container className="w-full flex flex-col gap-6">
        <div className="flex justify-between gap-12 bg-bravo p-6 rounded-md">
          <div className="grow">
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
