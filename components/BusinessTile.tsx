import { BusinessTileType } from "@/types/BusinessTileType";
import { PropsWithChildren } from "react";

interface Props {
  business: BusinessTileType;
}

export const BusinessTile: React.FC<PropsWithChildren<Props>> = ({
  business,
}) => {
  return (
    <div className="grid grid-cols-3 gap-6 bg-white rounded-md overflow-hidden">
      <div
        className="p-6 flex items-center justify-center"
        style={{ backgroundColor: business.background }}
      >
        <div className="w-full h-full max-h-6 max-w-xs">{business.logo}</div>
      </div>
      <div className="col-span-2 p-6 flex flex-col gap-6">
        <h2 className="font-heading text-4xl text-alpha font-bold max-w-2xl leading-[1.2]">
          {business.name}
        </h2>
        <p>{business.desc}</p>
        <hr />
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-6">Tags</div>
            <div className="flex items-center gap-6">Address</div>
          </div>
          <div>
            <a className="" href={business.website}>
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
