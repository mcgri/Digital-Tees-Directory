import { BusinessTileType } from "@/types/BusinessTileType";
import { ArrowRight, MapPin, Tags } from "lucide-react";
import { PropsWithChildren } from "react";

interface Props {
  business: BusinessTileType;
}

export const BusinessTile: React.FC<PropsWithChildren<Props>> = ({
  business,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-md overflow-hidden">
      <div
        className="p-6 flex items-center justify-center"
        style={{ backgroundColor: business.background }}
      >
        <div className="w-full max-w-xs">{business.logo}</div>
      </div>
      <div className="col-span-2 p-12 flex flex-col gap-6">
        <h2 className="font-heading text-2xl md:text-4xl text-alpha font-bold max-w-2xl leading-[1.2]">
          {business.name}
        </h2>
        <p>{business.desc}</p>
        <hr />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-3">
            {business.tags && (
              <div className="flex items-center gap-3">
                <Tags className="w-6 h-6 text-alpha" />
                <span>
                  {business.tags.map((tag, i) => (
                    <>
                      {tag.name}
                      {i < business.tags.length - 1 && ", "}
                    </>
                  ))}
                </span>
              </div>
            )}
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-alpha" />
              <span>{business.address}</span>
            </div>
          </div>
          <div>
            <a
              className="[ dtd-button ] text-sm py-3 px-5 gap-3"
              href={business.website}
              target="_blank"
            >
              <span>Visit Website</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
