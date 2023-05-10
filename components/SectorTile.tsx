import { SectorTileType } from "@/types/SectorTileType";
import { Building2 } from "lucide-react";
import { PropsWithChildren } from "react";

interface Props {
  sector: SectorTileType;
}

export const SectorTile: React.FC<PropsWithChildren<Props>> = ({ sector }) => {
  return (
    <a
      href={`sectors/${sector.id}`}
      className="group relative aspect-[16/10] bg-alpha bg-cover bg-center rounded-md overflow-hidden flex flex-col justify-end"
      style={{ backgroundImage: `url(${sector.image})` }}
    >
      <div className="absolute inset-0 bg-alpha mix-blend-color duration-300 | group-hover:opacity-0"></div>
      <div className="absolute inset-0 bg-alpha mix-blend-hard-light duration-300 | group-hover:opacity-0"></div>
      <div className="absolute inset-0 bg-alpha/40 backdrop-blur-[2px] duration-300 | group-hover:opacity-0"></div>
      <div className="relative bg-alpha/80 backdrop-blur-[2px] p-6">
        <h3 className="font-bold uppercase text-xl text-white">
          {sector.name}
        </h3>
        <div className="flex items-center gap-3 text-bravo text-lg">
          <Building2 className="w-6 h-6" strokeWidth={1} />
          <p>{Math.floor(Math.random() * (30 - 5 + 1) + 5)} listings</p>
        </div>
      </div>
    </a>
  );
};
